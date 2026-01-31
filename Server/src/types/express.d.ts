import type { JwtPayload } from "../services/token.ts";


declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
