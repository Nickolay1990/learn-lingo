import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import type { RegisterAndLoginData, SetUserNameData } from "../types/auth";

export const registerUser = async ({
  auth,
  email,
  password,
}: RegisterAndLoginData) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

export const setUserName = async ({ user, name }: SetUserNameData) => {
  const res = await updateProfile(user, { displayName: name });
  return res;
};

export const loginUser = async ({
  auth,
  email,
  password,
}: RegisterAndLoginData) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};
