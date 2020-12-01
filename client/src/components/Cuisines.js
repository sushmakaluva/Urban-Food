import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import CuisinesCard from './CuisinesCard';
import {CityContext} from "../utils/CityContext";

export default function Cuisines() {
  const [cuisines, setCuisines] = useState([]);
  const { cityDetails } = useContext(CityContext);
  const { city_id, lat, long } = cityDetails

  useEffect(() => {
    // getCuisines(city_id, lat, long);
  },[cityDetails])

  const headingStyle = {
    textAlign: "left",
    margin: "20px"
  };

  const getCuisines = (city_id, lat, long) => {
    let queryString = '';
    if (city_id) queryString = `city_id=${city_id}`
    else if (lat && long) queryString = `lat=${lat}&lon=${long}`
    else return;

    axios.get(`https://developers.zomato.com/api/v2.1/cuisines?${queryString}`, {
      headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
    })
      .then(res => {
        setCuisines(res.data.cuisines)
        console.log("cuisines", res.data)
      })
      .catch(err => console.log(err));
  }

  return (
    cuisines.length > 0 &&
    (<div>
      <h2 style={headingStyle}>Cuisines</h2>
      <CuisinesCard cuisines={cuisines} />
    </div>
    )
  )
}
