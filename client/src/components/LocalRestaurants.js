import React, { useState, useEffect,useContext } from 'react';
import axios from "axios";
// import Grid from '@material-ui/core/Grid';
import RestauCard from './RestauCard';
import { CityContext } from "../utils/CityContext";

export default function LocalRestaurants() {

  const [coordinates, setCoordinates] = useState({ latitude: "", longitude: "" });
  const [localRestaurants, setLocalRestaurants] = useState([]);
  const { cityDetails } = useContext(CityContext);
  const { city_id} = cityDetails;

  useEffect(() => {
    // getLocation();
  }, [])

  useEffect(() => {
    // getLocalRestaurants(coordinates.latitude, coordinates.longitude,city_id);
  }, [coordinates])

  function getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("latitude is :", position.coords.latitude);
        // console.log("longitude is :", position.coords.longitude);
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 10000
        }
      );
  }

  const getLocalRestaurants = (latitude, longitude, city_id) => {

    let queryString = '';
    if (city_id) queryString = `city_id=${city_id}`
    else if (latitude && longitude) queryString = `lat=${latitude}&lon=${longitude}`
    else return;

    axios.get(`https://developers.zomato.com/api/v2.1/search?${queryString}`, {
      headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
    })
      .then(res => {
        setLocalRestaurants(res.data.restaurants)
        console.log("local resto",res.data)
      })
      .catch(err => console.log(err));
  }

  const headingStyle = {
    textAlign: "left",
    margin: "20px"
  };

  return (
    localRestaurants.length>0 &&
    (<div>
      <h3 style={headingStyle}>Local Restaurants Nearby</h3>
      <RestauCard localRestaurants={localRestaurants} />
    </div>
    )
  )
}
