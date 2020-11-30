import React from 'react';
import { Card } from 'react-bootstrap';
import '../card.css';

export default function CollectionsCard(props) {

  const cardStyle = {
    width: "400px",
    justifyContent: "left",
    borderRadius: "10px",
    border: "solid black",
    borderWidth: "100%",
    margin: "20px",
    cursor: "pointer",
    height: "300px"
  }

  const imgStyle = {
    height: "300px",
    width: "400px",
  }

  return (
    <div className="container">
      <ul className="grid_list">
        {props.collections.map(item =>
          <li>
            <Card style={cardStyle}>
              <img src={item.collection.image_url} alt="dine-pic" style={imgStyle} />
            </Card>
            <h4><b>{item.collection.title}</b></h4>
          </li>
        )}
      </ul >
    </div >
  )
}

