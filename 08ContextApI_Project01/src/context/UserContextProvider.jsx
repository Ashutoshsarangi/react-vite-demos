import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const { children } = props;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
