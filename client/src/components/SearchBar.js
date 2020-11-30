import React, { useState, useContext } from 'react';
import axios from "axios";
import { InputAdornment, TextField, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RoomIcon from '@material-ui/icons/Room';
import { CityContext } from "../utils/CityContext";
// import Select from 'react-select';

export default function SearchBar(props) {

  const { cityDetails, setCityDetails } = useContext(CityContext);

  const [location, setLocation] = useState('');
  const [searchKeyword, setSearchKeyword] = useState();
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const searchLocationStyle = { backgroundColor: "white", width: "20%", marginBottom: "20px", border: "none" };

  const searchBarStyle = { backgroundColor: "white", width: "40%", marginBottom: "30px", border: "none" }

  const locationOnChange = (e) => {
    setLocation(e.target.value)
    getLocationSuggestions(location)
    getCityId(location);
  }

  const SearchOnChange = (e) => {
    setSearchKeyword(e.target.value)
  }

  const getCityId = (location) => {
    axios.get('https://developers.zomato.com/api/v2.1/locations?query=' + location, {
      headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
    })
      .then(res => {
        console.log("getCityId response", res.data)
        if (res.data.location_suggestions.length > 0) {
          setCityDetails(
            {
              city_id: res.data.location_suggestions[0].city_id,
              city_name: res.data.location_suggestions[0].city_name,
              lat: res.data.location_suggestions[0].latitude,
              long: res.data.location_suggestions[0].longitude
            })
        }
      })
      .catch(err => console.log(err));
  }

  const getLocationSuggestions = (locationKeyword) => {
    if (!locationKeyword) return 'Toronto';
    axios.get('https://developers.zomato.com/api/v2.1/locations?count=10&query=' + locationKeyword, {
      headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
    })
      .then(res => {
        console.log("Location suggestions response", res.data)
        setLocationSuggestions(res.data.location_suggestions)
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <span>
        {/* <Select
          options={locationSuggestions}
          value={location}
          onClick={locationOnChange}
        /> */}

        <TextField
          id="standard-half-width"
          placeholder="Location"
          value={props.location}
          // options={locationSuggestions}
          onChange={locationOnChange}
          autoComplete="on"
          variant="outlined"
          style={searchLocationStyle}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ArrowDropDownIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <TextField
          id="standard-full-width"
          placeholder="Search for a restaurant, cuisine or a dish"
          value={searchKeyword}
          onChange={SearchOnChange}
          autoComplete="on"
          variant="outlined"
          style={searchBarStyle}
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
      </span>
      {/* {console.log(location)} */}
    </div>
  )
}
