import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../appwrite/auth";
import { logout } from "../../store/auth/auth.slice";

const Header = (props) => {
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navItem = [
    {
      name: "Home",
      path: "/dashboard",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
  ];

  const logout = async () => {
    const result = await authService.logout();
    if (result) {
      dispatch(logout({}));
      navigate("/login");
    }
  };

  return (
    <nav className="bg-blue-600 flex justify-between h-[50px] items-center text-white cursor-pointer p-3">
      <div>Logo</div>
      <ul className="flex space-x-4">
        {navItem.map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
        )}
      </ul>
      <div className=" space-x-5">
        {!authStatus && <Link to="/login">Sign in</Link>}
        {!authStatus && <Link to="/sign-up">Sign Up</Link>}
        {authStatus && <Link onClick={logout}>Log Out</Link>}
      </div>
    </nav>
  );
};

export default Header;
