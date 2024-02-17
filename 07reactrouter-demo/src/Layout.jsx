import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
