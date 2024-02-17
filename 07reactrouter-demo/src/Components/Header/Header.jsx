import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <Link to="/"> Logo</Link>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "activeHeader" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive ? "activeHeader" : ""}`}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `${isActive ? "activeHeader" : ""}`}
      >
        Contact
      </NavLink>
      <NavLink
        to="/github"
        className={({ isActive }) => `${isActive ? "activeHeader" : ""}`}
      >
        Github
      </NavLink>
      <Link to="/">Login</Link>
      <Link to="/">Get Started</Link>
    </>
  );
};

export default Header;
