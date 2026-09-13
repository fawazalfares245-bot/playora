__d(
  function (g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.tierForCategory =
        e.sanctionMeta =
        e.recommendedNextSanction =
        e.needsAdminApproval =
        e.computeStanding =
        e.VIOLATION_CATEGORIES =
        e.SANCTION_TYPES =
        e.CURRENT_COC_VERSION =
        e.COC_DOS =
        e.COC_DONTS =
          void 0));
    ((e.CURRENT_COC_VERSION = 1),
      (e.COC_DOS = ["cocDo1", "cocDo2", "cocDo3", "cocDo4", "cocDo5", "cocDo6"]),
      (e.COC_DONTS = [
        "cocDont1",
        "cocDont2",
        "cocDont3",
        "cocDont4",
        "cocDont5",
        "cocDont6",
        "cocDont7",
        "cocDont8",
      ]));
    const n = (e.SANCTION_TYPES = [
      { type: "warning", rank: 1, labelKey: "sanction_warning", emoji: "\u26a0\ufe0f", tone: "warning" },
      {
        type: "yellow_card",
        rank: 2,
        labelKey: "sanction_yellow_card",
        emoji: "\ud83d\udfe8",
        tone: "warning",
      },
      { type: "red_card", rank: 3, labelKey: "sanction_red_card", emoji: "\ud83d\udfe5", tone: "danger" },
      { type: "suspension", rank: 4, labelKey: "sanction_suspension", emoji: "\u23f8\ufe0f", tone: "danger" },
      { type: "ban", rank: 5, labelKey: "sanction_ban", emoji: "\u26d4", tone: "danger" },
    ]);
    e.sanctionMeta = (o) => n.find((n) => n.type === o);
    const o = (e.VIOLATION_CATEGORIES = [
      { category: "lateness", labelKey: "vioLateness", tier: "warning" },
      { category: "unsportsmanlike", labelKey: "vioUnsportsmanlike", tier: "warning" },
      { category: "no_show", labelKey: "vioNoShow", tier: "warning" },
      { category: "disruption", labelKey: "vioDisruption", tier: "yellow_card" },
      { category: "leave_early", labelKey: "vioLeaveEarly", tier: "yellow_card" },
      { category: "dangerous_play", labelKey: "vioDangerous", tier: "yellow_card" },
      { category: "abuse", labelKey: "vioAbuse", tier: "red_card" },
      { category: "harassment", labelKey: "vioHarassment", tier: "red_card" },
      { category: "bullying", labelKey: "vioBullying", tier: "red_card" },
      { category: "discrimination", labelKey: "vioDiscrimination", tier: "red_card" },
      { category: "property_damage", labelKey: "vioPropertyDamage", tier: "red_card" },
      { category: "cheating", labelKey: "vioCheating", tier: "red_card" },
      { category: "substances", labelKey: "vioSubstances", tier: "red_card" },
      { category: "violence", labelKey: "vioViolence", tier: "ban" },
      { category: "threats", labelKey: "vioThreats", tier: "ban" },
      { category: "hate_speech", labelKey: "vioHateSpeech", tier: "ban" },
      { category: "impersonation", labelKey: "vioImpersonation", tier: "ban" },
      { category: "fraud", labelKey: "vioFraud", tier: "ban" },
      { category: "other", labelKey: "vioOther", tier: "warning" },
    ]);
    e.tierForCategory = (n) => o.find((o) => o.category === n)?.tier ?? "warning";
    const t = (n) => {
      const o = n.filter((n) => "warning" === n.type).length,
        t = n.filter((n) => "yellow_card" === n.type).length,
        c = n.filter((n) => "red_card" === n.type).length,
        l = n.some((n) => "ban" === n.type),
        y = !l && n.some((n) => "suspension" === n.type);
      return {
        key: l
          ? "banned"
          : y
            ? "suspended"
            : c > 0
              ? "sanctioned"
              : t > 0
                ? "cautioned"
                : o > 0
                  ? "warned"
                  : "good",
        warnings: o,
        yellowCards: t,
        redCards: c,
        isSuspended: y,
        isBanned: l,
      };
    };
    e.computeStanding = t;
    e.recommendedNextSanction = (n) => {
      const o = t(n);
      return o.isBanned || o.redCards >= 2
        ? "ban"
        : o.redCards >= 1 || o.yellowCards >= 2
          ? "red_card"
          : o.yellowCards >= 1 || o.warnings >= 2
            ? "yellow_card"
            : "warning";
    };
    e.needsAdminApproval = (n, o) => "organizer" === o && ("ban" === n || "suspension" === n);
  },
  656,
  [],
);
