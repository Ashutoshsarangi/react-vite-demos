import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
const Header = (props) => {
  const authStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();
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
        {authStatus && <Link>Log Out</Link>}
      </div>
    </nav>
  );
};

export default Header;
