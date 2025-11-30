import * as Yup from "yup";

export const registerFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Minimum 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});
