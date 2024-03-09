const CheckBox = ({ user, updateCheckBox }) => {
  return (
    <div>
      <div>
        <p>My preferences</p>
        <label>
          <input
            type="checkbox"
            value="veg"
            checked={user.prefer?.veg}
            onChange={updateCheckBox}
          />
          Veg:{" "}
        </label>
        <label>
          <input
            type="checkbox"
            value="nonveg"
            checked={user.prefer?.nonveg}
            onChange={updateCheckBox}
          />
          Non Veg:{" "}
        </label>
        <label>
          <input
            type="checkbox"
            value="both"
            checked={user.prefer?.both}
            onChange={updateCheckBox}
          />
          Both :{" "}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
