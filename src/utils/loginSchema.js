import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email wajib diisi")
    .email("Format email tidak valid"),

  password: yup
    .string()
    .required("Password wajib diisi")
    .min(8, "Password minimal 8 karakter"),
});
