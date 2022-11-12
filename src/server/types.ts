export interface Credentials {
  username: string;
  password: string;
}

export interface RegisterData extends Credentials {
  picture?: string;
  email: string;
}
