import { useContext } from "react";
import UserContext from "../context/userContext";

const Profile = (props) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Profile</h2>
      <div>{user.name}</div>
      <div>{user.password}</div>
    </div>
  );
};

export default Profile;
