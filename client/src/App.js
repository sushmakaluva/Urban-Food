import React, { useState, useContext } from "react";
import "./App.css";
import Categories from './components/Categories';
import Collections from './components/Collections';
// import Cuisines from './components/Cuisines';
import ImagePart from './components/ImagePart';
import LocalRestaurants from './components/LocalRestaurants';
import CityContextProvider from "./utils/CityContext";

function App() {
  return (
    <div className="App">
      <CityContextProvider>
        <ImagePart />
        <Categories />
        <Collections />
        {/* <Cuisines /> */}
        <LocalRestaurants />
      </CityContextProvider>
    </div>
  );
}

export default App;
