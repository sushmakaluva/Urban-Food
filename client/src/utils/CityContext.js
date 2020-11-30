import React, { useState } from "react";

export const CityContext = React.createContext();

const CityContextProvider = (props) => {
  const [cityDetails, setCityDetails] = useState({
    city_id: "",
    city_name: "",
    lat: "",
    long: ""
  });

  return (
    <CityContext.Provider value={{ cityDetails, setCityDetails }}>
      {props.children}
    </CityContext.Provider>
  )
}

export default CityContextProvider;



