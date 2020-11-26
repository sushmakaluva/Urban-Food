import React from 'react'

export default function Heading() {

  const headingStyle = {
    color: "white",
    fontWeight: "bold",
    alignText: "center",
    fontSize: "80px",
    
  };

  const subHeadingStyle={
    color: "white",
    fontSize: "50px",
    fontWeight:"lighter"
  };

  return (
    <div>
      <h1 style={headingStyle}>Urban Food</h1>
      <h2 style={subHeadingStyle}>Discover the best food & drinks in Toronto, ON</h2>
    </div>
  )
}
