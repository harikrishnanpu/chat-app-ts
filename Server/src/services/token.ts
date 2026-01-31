import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface JwtPayload {
  userId: string;
  email: string;
}

export class JwtTokenService {
  private readonly JWT_TOKEN_SECRET: Secret;
  private readonly EXPIRES_IN: SignOptions["expiresIn"] = "7d";

  constructor() {
    if (!process.env.JWT_TOKEN_SECRET) {
      throw new Error("JWT secrets are not configured");
    }

    this.JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
  }

  generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, this.JWT_TOKEN_SECRET, {
      expiresIn: this.EXPIRES_IN,
    });
  }

  verifyToken(token: string): JwtPayload {
    try {
      const decoded = jwt.verify(token, this.JWT_TOKEN_SECRET);

      if (
        typeof decoded !== "object" ||
        !("userId" in decoded) ||
        !("email" in decoded)
      ) {
        throw new Error("Invalid token payload");
      }

      return decoded as JwtPayload;
    } catch {
      throw new Error("Invalid or expired token");
    }
  }
}
