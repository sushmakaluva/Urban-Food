import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import axios from "axios";


export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // getCategories();
  }, [])

  const getCategories = () => {
    axios.get('https://developers.zomato.com/api/v2.1/categories'
      , {
        headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
      })
      .then(res => {
        setCategories(res.data.categories)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  const headingStyle = {
    textAlign: "left",
    margin: "20px"
  };

  return (
    categories.length>0 &&
    (<div>
      <h3 style={headingStyle}>Categories</h3>
      <CategoryCard categories={categories} />
    </div>
    )
  )
}
