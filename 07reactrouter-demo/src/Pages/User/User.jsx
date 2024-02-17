import { useParams } from "react-router-dom";

const User = (props) => {
  const { userId } = useParams();
  return <div>User: {userId}</div>;
};

export default User;
