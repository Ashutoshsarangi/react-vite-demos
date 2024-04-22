import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import IconButton from "@mui/material/IconButton";

import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useNavigate } from "react-router-dom";

const Menus = [
  { text: "Home", icon: <HomeIcon />, route: "/home" },
  { text: "Service", icon: <SettingsIcon />, route: "/service" },
  { text: "About", icon: <PersonIcon />, route: "/about" },
  { text: "Contact", icon: <AddIcCallIcon />, route: "/contact" },
  { text: "Setting", icon: <MiscellaneousServicesIcon />, route: "/setting" },
];

const SidePanel = ({
  drawerWidth,
  DrawerHeader,
  theme,
  handleDrawerClose,
  open,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    navigate(link);
    handleDrawerClose();
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {Menus.map((menu, index) => (
          <ListItem key={menu.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(menu.route)}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidePanel;
