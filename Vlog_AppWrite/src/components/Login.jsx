import { useForm } from "react-hook-form";
import Input from "./Input";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          placeholder="Enter Email"
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          label="Password"
          placeholder="Enter Password"
          type="password"
          {...register("password", { required: true, minLength: 5 })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
