import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
// import { InputAdornment, TextField, IconButton } from "@material-ui/core";
// import SearchIcon from '@material-ui/icons/Search';


export default function NavBar() {

  const NavStyle1 = {
    color: "white",
    opacity: 1,
    fontWeight: "bolder",
    marginLeft: 'auto'
  }

  const NavStyle2 = {
    color: "white",
    opacity: 1,
    fontWeight: "bolder",
  }

  return (
    <div>
      <Tabs>
        <Tab label="Login" style={NavStyle1} value="1" />
        <Tab label="Sign-up" style={NavStyle2} value="2" />
      </Tabs>
    </div>

  )
}
