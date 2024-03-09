const RadioBtn = ({ user, updateRadioBtn }) => {
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="fileUpload"
            value="singleFileUpload"
            checked={user.fileUpload === "singleFileUpload"}
            onChange={updateRadioBtn}
          />
          Single File Upload
        </label>
        <label>
          <input
            type="radio"
            name="fileUpload"
            value="multipleFileUpload"
            checked={user.fileUpload === "multipleFileUpload"}
            onChange={updateRadioBtn}
          />
          Multiple File Upload
        </label>
      </div>
    </div>
  );
};

export default RadioBtn;
