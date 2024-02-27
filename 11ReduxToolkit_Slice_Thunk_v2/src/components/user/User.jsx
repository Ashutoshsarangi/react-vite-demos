import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteuser } from "../../store/user/userSlice";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [updateId, setUpdateId] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    if (updateId) {
      dispatch(updateUser({ id: updateId, user: { ...userInfo } }));
      setUpdateId("");
    } else {
      dispatch(addUser({ user: { ...userInfo, id: Date.now() } }));
    }
    setUserInfo({ userName: "", age: "", college: "" });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const editUserInfo = (ID, user) => {
    console.log(user);
    setUserInfo(user);
    setUpdateId(ID);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        name="userName"
        value={userInfo.userName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter Age"
        name="age"
        value={userInfo.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter College"
        name="college"
        value={userInfo.college}
        onChange={handleChange}
      />
      <button onClick={(e) => handleSubmit(e)}>{`${
        updateId ? "Update" : "Save"
      }`}</button>
      <hr></hr>
      <ul>
        {userState.users.map((user) => {
          return (
            <li key={user.id}>
              {user.userName} -- {user.age} -- {user.college}
              <button onClick={() => editUserInfo(user.id, user)}>Edit</button>
              <button onClick={() => dispatch(deleteuser({ id: user.id }))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
