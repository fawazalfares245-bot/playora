#!/usr/bin/env python3
"""Split / rebuild helper for the single-file Rush X bundle.

  python3 tools/bundle.py split <id...> -> writes bundle-src/<id>.js (prettified copy of the module as currently in index.html)
  python3 tools/bundle.py build         -> replaces every module that has a bundle-src/<id>.js, appends bundle-src/new/*.js

Modules are Metro `__d(function(...){...},<id>,[deps]);` blocks located by id, so the build is idempotent and
does not depend on the original minified text.
"""
import re, sys, os, subprocess, pathlib, hashlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
HTML = ROOT / "index.html"
SRC = ROOT / "bundle-src"
MARK_START = "<script>var __BUNDLE_START_TIME__"
MARK_END = "__r(0);</script>"

def read_html():
    t = HTML.read_text(encoding="utf-8")
    a = t.index(MARK_START) + len("<script>")
    b = t.index(MARK_END) + len("__r(0);")
    return t, a, b

def modules(bundle):
    starts = [m.start() for m in re.finditer(r'__d\(\s*function\s*\([\w$,\s]*\)\s*\{', bundle)] + [len(bundle)]
    out = {}
    for s, e in zip(starts, starts[1:]):
        body = bundle[s:e]
        m = re.search(r'\},\s*(\d+),\s*\[([\d,\s]*)\],?\s*\);?\s*$', body.rstrip())
        if m:
            out[m.group(1)] = body
    return out

def split(ids):
    t, a, b = read_html()
    mods = modules(t[a:b])
    for i in ids:
        raw = mods[i]
        pretty = subprocess.run(["prettier", "--parser", "babel", "--print-width", "110"],
                                input=raw, capture_output=True, text=True, check=True).stdout
        (SRC / f"{i}.js").write_text(pretty, encoding="utf-8")
        print("split", i, len(raw), "->", pretty.count("\n"), "lines")

def build():
    """Replace every module that has a bundle-src/<id>.js with that file's contents (located by module id),
    append/replace modules from bundle-src/new/, and write index.html. Idempotent."""
    t, a, b = read_html()
    bundle = t[a:b]
    mods = modules(bundle)
    n = 0
    for f in sorted(SRC.glob("*.js")):
        i = f.stem
        new = f.read_text(encoding="utf-8")
        subprocess.run(["node", "--check", str(f)], check=True)
        if i not in mods:
            raise SystemExit(f"module {i}: not found in bundle")
        cur = mods[i]
        if cur.strip() == new.strip():
            continue
        k = bundle.index(cur)
        bundle = bundle[:k] + new.rstrip("\n") + "\n" + bundle[k + len(cur):]
        mods = modules(bundle)
        n += 1
    NEW = SRC / "new"
    added = 0
    if NEW.exists():
        for f in sorted(NEW.glob("*.js")):
            i = f.stem
            body = f.read_text(encoding="utf-8").rstrip("\n") + "\n"
            subprocess.run(["node", "--check", str(f)], check=True)
            mods = modules(bundle)
            if i in mods:
                cur = mods[i]
                if cur.strip() != body.strip():
                    k = bundle.index(cur)
                    bundle = bundle[:k] + body + bundle[k + len(cur):]
                    added += 1
            else:
                k = bundle.rindex("__r(0);")
                bundle = bundle[:k] + body + bundle[k:]
                added += 1
    out = t[:a] + bundle + t[b:]
    # Stamp a build id derived from the bundle itself. Same bytes -> same id, so the write stays
    # idempotent; different bytes -> a new id, which is how anyone can tell which build a browser is
    # actually running (it is logged to the console and shown on the profile screen).
    bid = hashlib.sha1(bundle.encode("utf-8")).hexdigest()[:10]
    out = re.sub(r'buildId: "[^"]*"', f'buildId: "{bid}"', out, count=1)
    if out != t:
        HTML.write_text(out, encoding="utf-8")
    print("build: replaced", n, "module(s), added/updated", added, "new module(s);", len(out), "bytes; build", bid)

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "split":
        split(sys.argv[2:])
    elif cmd == "build":
        build()
    else:
        raise SystemExit(__doc__)
