import React from 'react';

export default function Heading() {

  const headingStyle = {
    color: "white",
    fontWeight: "bold",
    alignText: "center",
    fontSize: "500%",
    margin: "20px",
    marginTop: "50px",
  };

  const subHeadingStyle = {
    color: "white",
    fontSize: "250%",
    fontWeight: "lighter",
    margin: "20px",
    alignText: "center",
  };

  return (
    <div>
      <h1 style={headingStyle}>Urban Food</h1>
      <h3 style={subHeadingStyle}>Discover the best food & drinks in Toronto, ON</h3>
    </div>
  )
}
