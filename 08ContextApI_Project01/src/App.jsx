import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React With Context API Project - 1</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
