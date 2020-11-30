import React from 'react';
import {Card } from 'react-bootstrap';
import '../card.css';


export default function RestauCard(props) {

  const cardStyle = {
    width: "200px",
    justifyContent: "left",
    borderRadius: "5px",
    border: "solid black",
    borderWidth: "100%",
    margin: "20px",
    cursor: "pointer"
  }

  return (
    <div>
      <ul className="grid_list">
        {props.localRestaurants.length > 0 &&
          (props.localRestaurants.map(item =>
            <li>
              <Card key={item.restaurant.R.res_id} style={cardStyle}>
                {(item.restaurant.thumb) && <img src={item.restaurant.thumb} alt="restau-pic" className="card-img-top" />}
                <br />
                <a href={item.restaurant.url} target="_blank" rel="noopener noreferrer" className="card-title">{item.restaurant.name}</a>
                <div className="card-body">
                  <p>{item.restaurant.cuisines}</p>
                  <p>{item.restaurant.location.address}</p>
                  <p>{item.restaurant.location.locality}</p>
                  <p>{item.restaurant.establishment[0]}</p>
                  <p>{item.restaurant.average_cost_for_two}$</p>
                  <p>{item.restaurant.user_rating.aggregate_rating}</p>
                </div>
              </Card>
            </li>
          ))}
      </ul>
    </div>
  )
}
