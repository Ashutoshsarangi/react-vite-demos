import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Layout/Header/Header";
import { CssBaseline } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SidePanel from "./Layout/SidePanel/SidePanel";
import { DRAWER_WIDTH } from "./App.constants";
import "./App.css";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header {...{ handleDrawerOpen, open }} />
      <SidePanel
        drawerWidth={DRAWER_WIDTH}
        DrawerHeader={DrawerHeader}
        theme={theme}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <Main open={open} sx={{ marginTop: "5px" }}>
        <Outlet />
      </Main>
    </Box>
  );
}

export default App;
