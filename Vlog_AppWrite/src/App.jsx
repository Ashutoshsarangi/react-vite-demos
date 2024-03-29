import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./appwrite/auth";
import { login, logout } from "./store/auth/auth.slice";
import { Header, Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log("AuthState using useSelector---> ", authState);
  useEffect(() => {
    authService
      .getAccount()
      .then((user) => {
        console.log("User --> ", user);
        if (user) {
          dispatch(login({ userData: user }));
          navigate("/dashboard");
        } else {
          dispatch(logout({ name: "Ashu", testPayload: true }));
          navigate("/login");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <span>Loading....</span>
      ) : (
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
