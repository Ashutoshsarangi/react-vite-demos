import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import database from "../appwrite/database";

const validationSchema = Yup.object({
  postTitle: Yup.string()
    .max(15, "Must be 15 Char or less")
    .required("Required"),
  content: Yup.string()
    .min(20, "Must be more than 20 char")
    .required("Required"),
  status: Yup.string()
    .required("Required")
    .oneOf(["active", "inactive"], "Choose from the Drop Down"),
});

const PostTemplate = (props) => {
  const userId = useSelector((state) => {
    return state.auth.userData?.$id;
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    resetForm,
    setFieldValue,
    values: { postTitle, content, status, image },
  } = useFormik({
    initialValues: {
      postTitle: "",
      content: "",
      status: "NA",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values, "----> on Submit");
      const { image, postTitle, content, status } = values;
      const postSlug = postTitle.replace(" ", "-");
      try {
        const result = await database.uploadFile(image);
        console.log("Result --> ", result);
        const featuredImage = database.getFilePreview(result.$id);
        if (result) {
          const payload = {
            title: postTitle,
            slug: postSlug,
            content,
            featuredImage,
            status,
            userId,
          };
          console.log(payload);
          const dataUpload = await database.createDocument(payload);
        }
      } catch (error) {
        console.log(error);
      } finally {
        resetForm();
      }
    },
  });

  return (
    <div>
      <h1>Add / Update Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          name="postTitle"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={postTitle}
        />
        {touched.postTitle && errors.postTitle && <p>{errors.postTitle}</p>}
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          onBlur={handleBlur}
          value={content}
        ></textarea>
        {touched.content && errors.content && <p>{errors.content}</p>}
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          onBlur={handleBlur}
          value={status}
        >
          <option value="NA">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">In Active</option>
        </select>
        {touched.status && errors.status && <p>{errors.status}</p>}
        <input
          type="file"
          name="image"
          // set supported file types here,
          // could also check again within formik validation or backend
          accept="image/png, .svg"
          onChange={(e) => {
            // Object is possibly null error w/o check
            if (e.currentTarget.files) {
              setFieldValue("image", e.currentTarget.files[0]);
            }
          }}
        />
        {touched.image && errors.image && <p>{errors.image}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostTemplate;
