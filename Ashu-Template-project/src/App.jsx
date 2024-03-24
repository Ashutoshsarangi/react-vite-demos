import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidePanelProvider } from "./context/sidepanel.context";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./layout/Header/Header";
import SidePanel from "./layout/SidePanel/SidePanel";
import "./App.css";

const POPUP_TYPES = {
  NOTIFICATION: "NOTIFICATION",
  MESSAGE: "MESSAGE",
  USER: "USER",
};

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <>
      <SidePanelProvider value={{ showPanel, setShowPanel }}>
        <Header />
        <div className="h-[calc(100vh-80px)] overflow-hidden shadow flex justify-center">
          <SidePanel />
          <div className="container mt-3 mb-3 mr-2 p-2 ml-2">
            <Outlet />
          </div>
        </div>
      </SidePanelProvider>
    </>
  );
}

export default App;
