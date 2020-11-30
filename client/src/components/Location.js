import React from 'react'

export default function Location() {
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const getLocationSuggestions = (locationKeyword) => {
    if (!locationKeyword) return 'Toronto';
    axios.get('https://developers.zomato.com/api/v2.1/search?query=' + locationKeyword, {
      // headers: { "user-key": "7643451d5684bd9eb0116cdfd72673a9" }
    })
      .then(res => {
        setLocationSuggestions(res.data.location_suggestions)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div>
      
    </div>
  )
}

