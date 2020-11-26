import React from 'react';
// import { Form } from 'react-bootstrap';
import { InputAdornment, TextField, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SearchBar() {
 
  return (
    <div>
      <TextField
        id="standard-full-width"
        placeholder="Search for a restaurant, cuisine or a dish"
        autoComplete="on"
        variant="outlined"
        style={{ backgroundColor: "white", width: "700px", borderRadius: "5px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}
