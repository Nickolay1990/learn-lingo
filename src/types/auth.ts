import type { Auth, User } from "firebase/auth";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface RegisterAndLoginData {
  auth: Auth;
  email: string;
  password: string;
}

export interface SetUserNameData {
  user: User;
  name: string;
}
