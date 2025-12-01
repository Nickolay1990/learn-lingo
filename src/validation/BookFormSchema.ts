import * as Yup from "yup";

export const BookFormSchema = Yup.object().shape({
  reason: Yup.string().required("Choose one of these variants"),
  name: Yup.string()
    .required("Name is required")
    .min(2, "Minimum 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(9, "Minimum 9 characters"),
});
