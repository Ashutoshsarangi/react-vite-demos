import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidePanel from "./Layout/SidePanel/SidePanel";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div>
      <SidePanel />
      <Outlet />
    </div>
  );
}

export default App;
