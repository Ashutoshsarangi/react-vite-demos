import { useRef, useEffect, useState } from "react";

const SingleFileUpload = (props) => {
  const [singleFile, setSingleFile] = useState();
  const [status, setStatus] = useState();
  const handleSingleFileChange = (e) => {
    if (e.target.files) {
      setSingleFile(e.target.files[0]);
    }
    console.log(e);
  };
  const handleSingleUpload = async () => {
    if (singleFile) {
      console.log("uploading file ....");
    }

    const formData = new FormData();
    formData.append("file", singleFile);

    try {
      const result = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });

      const data = await result.json();
      console.log("Final --> ", data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <h1>Single File Upload</h1>
      <div>
        <label htmlFor="singleFile"> Choose File</label>
        <input type="file" id="singleFile" onChange={handleSingleFileChange} />
      </div>
      {singleFile && (
        <section>
          File Details:
          <ul>
            <li>Name: {singleFile.name}</li>
            <li>Type: {singleFile.type}</li>
            <li>Size: {singleFile.size}</li>
          </ul>
        </section>
      )}
      {singleFile && (
        <button onClick={handleSingleUpload}>Upload a File</button>
      )}
    </div>
  );
};

export default SingleFileUpload;
