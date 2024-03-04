import { useForm } from "react-hook-form";
import Input from "../Input";
import TextEditor from "../TextEditor";

const PostCard = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Post data ===> ", data);
  return (
    <div>
      <h1>Add / Update Post Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Enter Title"
          name="title"
          {...register("title", {
            required: true,
          })}
        />
        <TextEditor />
      </form>
    </div>
  );
};

export default PostCard;
