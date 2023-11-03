import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const navigate = useNavigate();
  const loggedOut = () => {
    document.cookie = cookie.serialize("loggedIn", null, {
      maxAge: 0,
    });
    document.cookie = cookie.serialize("token", "");
    // navigate("/login");
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Attenuation Calculator
        </Typography>
        <ul className="nav_list">
          <li className="nav_list_item">
            <Link to="/newquery">NewQuery</Link>
          </li>
          {/* <li className="nav-list-item">
            <Link to="/SavedQueries">SavedQueries</Link>
          </li> */}
          <li className="nav_list_item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="nav-list-item" onClick={loggedOut}>
            Logout
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
