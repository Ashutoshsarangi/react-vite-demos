import { Controller, useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = (props) => {
  const { control } = useForm();
  return (
    <Controller
      name="textEditor"
      control={control}
      rules={{ required: true, minLength: 10, maxLength: 250 }}
      render={({ field: { onChange } }) => (
        <>
          <Editor
            apiKey="your-api-key"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </>
      )}
    />
  );
};

export default TextEditor;
