import React from 'react';
import {Card } from 'react-bootstrap';
import '../card.css'

export default function CategoryCard(props) {

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
    <div className="container">
      <ul className="grid_list">
        {props.categories.map(category =>
          <li>
            <Card style={cardStyle}>
                <img src="../images/clubDine.png" alt="dine-pic" />
                <h6>{category.categories.name}</h6>
            </Card>
          </li>
        )}
      </ul >
    </div >
  )
}

