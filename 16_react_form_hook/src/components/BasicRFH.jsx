import { useForm } from "react-hook-form";

const BasicRFH = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input name="email" {...register("email", { required: true })} />
        {errors.email && <p>Email field is required</p>}
        <select {...register("gender", { required: true })}>
          <option value="NA">Please select Gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p>Gender Information is required</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default BasicRFH;
