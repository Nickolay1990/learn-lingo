import { useState } from "react";
import css from "./BookForm.module.css";
import { useForm } from "react-hook-form";
import type { BookFormValues } from "../../types/teachers";
import { yupResolver } from "@hookform/resolvers/yup";
import { BookFormSchema } from "../../validation/BookFormSchema";
import { sendRequest } from "../../apiLib/apiLib";
import { FirebaseError } from "firebase/app";
import toast, { Toaster } from "react-hot-toast";

interface BookFormProps {
  onClose: () => void;
  urlPhoto: string;
  name: string;
}

const reasons = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
];

const BookForm = ({ onClose, urlPhoto, name }: BookFormProps) => {
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormValues>({
    resolver: yupResolver(BookFormSchema),
    defaultValues: {
      reason: reasons[0],
    },
  });

  const onSubmit = async (data: BookFormValues) => {
    try {
      setError("");

      await sendRequest(data);

      onClose();
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        setError(e.code);

        toast.error(e.code);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <section className={css.formWrapper}>
      <h2 className={css.formTitle}>Book trial lesson</h2>

      <p className={css.formText}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={css.teacherInfo}>
        <img src={urlPhoto} alt="avatar" className={css.photo} />
        <div>
          <p className={css.teacher}>Your teacher</p>
          <p className={css.teacherName}>{name}</p>
        </div>
      </div>

      <p className={css.question}>
        What is your main reason for learning English?
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={`${css.relative} ${css.radioGroup}`}>
          {reasons.map((r) => (
            <label key={r} className={css.radioItem}>
              <input
                type="radio"
                value={r}
                {...register("reason", { required: "Select a reason" })}
              />
              <span></span>
              {r}
            </label>
          ))}
          {errors.reason && (
            <p className={css.error}>{errors.reason.message}</p>
          )}
          {error && <p className={css.error}>{error}</p>}
        </div>

        <div className={css.relative}>
          <input
            placeholder="Full Name"
            {...register("name")}
            className={css.input}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
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
            type="phone"
            placeholder="Phone number"
            {...register("phone")}
            className={css.input}
          />
          {errors.phone && <p className={css.error}>{errors.phone.message}</p>}
        </div>

        <button type="submit" className={css.submitBtn}>
          Sign Up
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default BookForm;
