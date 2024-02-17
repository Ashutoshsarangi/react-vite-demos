import { useState, useContext } from "react";
import UserContext from "../context/userContext";

const Login = (props) => {
  const [auth, setAuth] = useState({ name: "", password: "" });
  const { setUser } = useContext(UserContext);
  const submitForm = () => {
    console.log(auth);
    setUser(auth);
    setAuth({ name: "", password: "" });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={auth.name}
        onChange={(e) => setAuth({ ...auth, name: e.target.value })}
        placeholder="Enter User name"
      />
      <input
        type="password"
        value={auth.password}
        onChange={(e) => setAuth({ ...auth, password: e.target.value })}
        placeholder="Enter Password"
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default Login;
