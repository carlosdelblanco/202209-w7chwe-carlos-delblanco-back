import type { JwtPayload } from "jsonwebtoken";

export interface Credentials {
  username: string;
  password: string;
}

export interface RegisterData extends Credentials {
  picture?: string;
  email: string;
}

export interface UserTokenPayload extends JwtPayload {
  id: string;
  username: string;
}
