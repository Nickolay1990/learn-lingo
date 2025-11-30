import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./LoginForm.module.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { Toaster, toast } from "react-hot-toast";
import type { LoginFormValues } from "../../types/auth";
import { loginFormSchema } from "../../validation/loginFormSchema";
import { loginUser } from "../../apiLib/apiLib";
import Cookies from "js-cookie";
import { useUserStore } from "../../stores/user.store";

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const setUser = useUserStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setError("");
      const { user } = await loginUser({
        auth,
        email: data.email,
        password: data.password,
      });

      const accessToken = await user.getIdToken();

      Cookies.set("accessToken", accessToken, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });

      setUser({
        name: user.displayName || "",
        email: user.email || "",
        id: user.uid,
      });

      onClose();
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        setError(e.code);
        toast.error(e.code.split("/")[1]);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <section className={css.formWrapper}>
      <h2 className={css.formTitle}>Log In</h2>

      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.relative}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={css.input}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
          {error && <p className={css.error}>{error.split("/")[1]}</p>}
        </div>

        <div className={css.relative}>
          <input
            type={isPassword ? "password" : "text"}
            placeholder="Password"
            {...register("password")}
            className={css.input}
          />
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
          <button type="button" onClick={() => setIsPassword(!isPassword)}>
            {isPassword ? (
              <svg className={css.eyePick}>
                <use href="/symbol-defs.svg#icon-eye"></use>
              </svg>
            ) : (
              <svg className={css.eyePick}>
                <use href="/symbol-defs.svg#icon-eye-open"></use>
              </svg>
            )}
          </button>
        </div>

        <button type="submit" className={css.submitBtn}>
          Log In
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default LoginForm;
