import React from 'react';
import { Card } from 'react-bootstrap';
import '../card.css';

export default function CuisinesCard(props) {

  const cardStyle = {
    width: "200px",
    justifyContent: "left",
    borderRadius: "5px",
    border: "groove black",
    borderWidth: "100%",
    margin: "5px",
    cursor: "pointer"
  }

  // useEffect(() => {
  //   randomCuisine(props.cuisines);
  // }, [props.cuisines])


  // const randomCuisine = (cuisines) => {
  //   var result = [];
  //   for (var i = 0; i <= 25; i++) {
  //     result.push(cuisines[Math.floor(Math.random() * cuisines.length)]);
  //   }
  //   return result;
  // }

  return (
    <div className="container">
      <ul className="grid_list2">
        {props.cuisines.map(item =>
          <li>
            <span> <a href="#"><h6>{item.cuisine.cuisine_name}</h6></a></span>
          </li>
        )}
      </ul >
    </div >
  )
}

