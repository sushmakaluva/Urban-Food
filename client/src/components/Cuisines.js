// import React, { useState, useEffect, useContext } from 'react';
// import axios from "axios";
// import CuisinesCard from './CuisinesCard';
// import CityContext from "../utils/CityContext";

// export default function Cuisines() {
//   const [cuisines, setCuisines] = useState([]);
//   const { city_id, lat, long } = useContext(CityContext);

//   useEffect(() => {
//     getCuisines(city_id, lat, long);
//   }, [])

//   const headingStyle = {
//     textAlign: "left",
//     margin: "20px"
//   };

//   const getCuisines = (city_id, lat, long) => {
//     let queryString = '';
//     if (city_id) queryString = `city_id=${city_id}`
//     else queryString = `lat=${lat}&lon=${long}`

//     axios.get(`https://developers.zomato.com/api/v2.1/cuisines?${queryString}`, {
//       headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
//     })
//       .then(res => {
//         setCuisines(res.data.cuisines)
//         console.log("cuisines", res.data)
//       })
//       .catch(err => console.log(err));
//   }

//   return (
//     <div>
//       <h3 style={headingStyle}>Cuisines</h3>
//       <CuisinesCard cuisines={cuisines} />
//     </div>
//   )
// }
