import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import CollectionsCard from './CollectionsCard';
import { CityContext } from "../utils/CityContext";

export default function Collections() {

  const [collections, setCollections] = useState([]);
  const { cityDetails } = useContext(CityContext);
  const { city_id, lat, long } = cityDetails

  useEffect(() => {
    // getCollections(city_id, lat, long);
  }, [cityDetails])

  const headingStyle = {
    textAlign: "left",
    margin: "20px"
  };

  const subHeadingStyle = {
    textAlign: "left",
    margin: "20px",
    fontWeight: "lighter"
  }

  const getCollections = (city_id, lat, long) => {
    let queryString = '';
    if (city_id) queryString = `city_id=${city_id}`
    else if (lat && long) queryString = `lat=${lat}&lon=${long}`
    else return;

    axios.get(`https://developers.zomato.com/api/v2.1/collections?${queryString}`, {
      headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
    })
      .then(res => {
        setCollections(res.data.collections)
        console.log("collections", res.data)
      })
      .catch(err => console.log(err));
  }

  return (
    collections.length > 0 &&
    (<div>
      <h2 style={headingStyle}>Collections</h2>
      <h4 style={subHeadingStyle}>Explore curated lists of top restaurants, cafes, pubs, and bars in Toronto,
      based on trends
      </h4>
      <CollectionsCard collections={collections} />
    </div>)
  )
}
