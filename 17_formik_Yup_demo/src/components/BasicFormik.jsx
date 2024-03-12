import { useFormik } from "formik";
import { validationSchema } from "./BasicFormik.helper";

const BasicFormik = (props) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    resetForm,
    values: { email, firstName, lastName },
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values, "----> on Submit");
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={firstName}
        />
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={lastName}
        />
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicFormik;
