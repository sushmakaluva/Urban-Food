import React from 'react';
import SearchBar from './SearchBar';
import Heading from './Heading'
import NavBar from './NavBar';
import './imagePart.css';

export default function ImagePart(props) {
  
  return (
    <div className="container-class">
      <NavBar />
      <Heading />
      <SearchBar/>
    </div>
  )
}
