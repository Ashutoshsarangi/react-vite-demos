import { useState } from "react";

const MultipleFileUpload = (props) => {
  const [multipleFiles, setMultipleFiles] = useState([]);

  const handleFileChange = (e) => {
    console.log([...e.target.files]);
    setMultipleFiles([...e.target.files]);
  };

  const uploadMultipleFiles = async () => {
    if (multipleFiles) {
      console.log("Uploading");
    }
    const formData = new FormData();
    [...multipleFiles].forEach((file, index) => {
      formData.append(`files_${index}`, file);
    });
    console.log("Form Data -> ", formData);
    try {
      const result = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });
      const data = await result.json();
      console.log(
        "Final Multiple file Upload data --> ",
        data.files,
        typeof data.files
      );
      //   setMultipleFiles([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Multiple File Upload</h1>
      <div>
        <label htmlFor="singleFile"> Choose Multiple Files</label>
        <input
          type="file"
          id="singleFile"
          onChange={handleFileChange}
          multiple
        />
      </div>
      {multipleFiles.length > 0 && (
        <section>
          File Details:
          {[...multipleFiles].map((file) => {
            return (
              <ul key={file.name}>
                <li>Name: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Size: {file.size}</li>
              </ul>
            );
          })}
        </section>
      )}
      {multipleFiles.length > 0 && (
        <button onClick={uploadMultipleFiles}>Upload Files</button>
      )}
    </div>
  );
};

export default MultipleFileUpload;
