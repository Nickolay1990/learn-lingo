import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./RegisterForm.module.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { registerFormSchema } from "../../validation/registerFormSchema";
import { Toaster, toast } from "react-hot-toast";
import type { RegisterFormValues } from "../../types/auth";
import { registerUser, setUserName } from "../../apiLib/apiLib";

interface RegisterFormProps {
  onClose: () => void;
}

const RegisterForm = ({ onClose }: RegisterFormProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setError("");
      await registerUser({ auth, email: data.email, password: data.password });

      if (auth.currentUser) {
        await setUserName({ user: auth.currentUser, name: data.name });
      }

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
      <h2 className={css.formTitle}>Registration</h2>

      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.relative}>
          <input
            placeholder="Name"
            {...register("name")}
            className={css.input}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
          {error && <p className={css.error}>{error.split("/")[1]}</p>}
        </div>

        <div className={css.relative}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={css.input}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
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
          Sign Up
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default RegisterForm;
