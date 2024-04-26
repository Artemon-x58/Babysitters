import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z]+$/, "Name must contain only Latin characters"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Invalid email address"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least 8 characters, including one letter and one number"
    ),
});

export const signInValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Invalid email address"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least 8 characters, including one letter and one number"
    ),
});

export const appointmentSchema = Yup.object({
  address: Yup.string()
    .required("Address is required")
    .matches(
      /.*\S.*/,
      "Address must contain at least one non-whitespace character"
    ),
  number: Yup.string()
    .required("Number is required")
    .matches(
      /^\+\d{12}$/,
      "Number must start with '+' and contain exactly 12digits"
    ),
  age: Yup.string()
    .required("Child's agege is required")
    .matches(/^\d+$/, "Age must contain only digits"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Invalid email address"
    ),
  parent: Yup.string()
    .matches(
      /.*\S.*/,
      "Father's or mother's name must contain at least one non-whitespace character"
    )
    .required("Father's or mother's name is required"),
});
