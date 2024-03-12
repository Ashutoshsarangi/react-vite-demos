import { useForm, Controller } from "react-hook-form";
import Input from "./Input";
import authService from "../appwrite/auth";

const Signup = (props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    name: "",
    password: "",
  });

  const onSubmit = (data) => {
    if (Object.keys(data).length) {
      authService.createAccount(data);
    }
    reset({ email: "", name: "", password: "" });
  };
  console.log("Errors -->", errors);
  console.log(watch("email"), errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "This is a required field",
          pattern: {
            value:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            message: " Should follow the Proper Email Pattern",
          },
        }}
        render={({ field }) => (
          <Input
            label="Email"
            placeholder="Enter Email"
            type="text"
            {...field}
          />
        )}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <Controller
        name="name"
        rules={{
          required: true,
        }}
        control={control}
        render={({ field }) => (
          <Input label="Name" placeholder="Enter name" type="text" {...field} />
        )}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            label="Password"
            placeholder="Enter Password"
            type="password"
            {...field}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default Signup;
