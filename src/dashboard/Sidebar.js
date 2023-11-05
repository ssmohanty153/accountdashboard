import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PhoneIcon from "@mui/icons-material/Phone";
import TopNavBar from "./TopNavBar";
import CardComponentApp from "./CardComponentApp";
import CardComponentAppCurve from "./CardComponentAppCurve";
import CardComponentAppTable from "./CardComponentAppTable";

import { Grid } from "@mui/material";
import CardComponentAppImport from "./CardComponentAppImport";

const drawerWidth = 240;
function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const isItemActive = (item) => activeItem === item;

  const getListItemStyle = (item) => ({
    background: isItemActive(item) ? "green" : "transparent",
    color: isItemActive(item) ? "white" : "black",
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <TopNavBar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Dashboard", icon: <DashboardIcon /> },
              { text: "Account", icon: <AccountBalanceIcon /> },
              { text: "Payrolls", icon: <DescriptionIcon /> },
              { text: "Reports", icon: <InsertChartIcon /> },
              { text: "Adviser", icon: <SupervisorAccountIcon /> },
              { text: "Contact", icon: <PhoneIcon /> },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  style={getListItemStyle(item.text)}
                  onClick={() => handleItemClick(item.text)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardComponentAppCurve />
          </Grid>
          <Grid item xs={6}>
            <CardComponentAppImport />
          </Grid>
          <Grid item xs={6}>
            <CardComponentApp />
          </Grid>
          <Grid item xs={6}>
            <CardComponentAppTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Sidebar;
