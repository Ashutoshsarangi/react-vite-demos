import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 Char or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 char or less")
    .required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
});

export const validate = (values) => {
  const errors = {};
  const { firstName, lastName, email } = values;

  if (!firstName) {
    errors.firstName = "Required";
  } else if (firstName.length > 15) {
    errors.firstName = "Must be 15 Chara or less";
  }

  if (!lastName) {
    errors.lastName = "Required";
  } else if (lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
