import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
const Header = (props) => {
  const authStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();
  const navItem = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      path: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      path: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <div>
      <nav>
        <div>Logo</div>
        <ul>
          {navItem.map(
            (item) => item.active && <li key={item.name}>{item.name}</li>
          )}
        </ul>
        <div>{authStatus && <button>Log Out</button>}</div>
      </nav>
    </div>
  );
};

export default Header;
