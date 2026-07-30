// JWT signing / verification helpers.
//
// JWT_SECRET must be provided via the environment (set in Railway's
// environment variables). No default/fallback secret is used in production
// to avoid signing tokens with a predictable key.
import jwt, { type SignOptions, type JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  // eslint-disable-next-line no-console
  console.warn(
    "JWT_SECRET is not set. Set it in your environment (Railway env vars) before deploying to production."
  );
}

export function signJwt(
  payload: string | object | Buffer,
  options?: SignOptions
): string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
    ...options,
  });
}

export function verifyJwt(token: string): JwtPayload | string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  return jwt.verify(token, JWT_SECRET);
}
