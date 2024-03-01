import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
