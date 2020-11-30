import React from "react";
import ReactDOM from 'react-dom';

let map;
var markers = [];
var infowindow;
const API_KEY = "AIzaSyCo38ze-EDZsnmNrI0eNQ6acRWXDijXDr8";
var place = [];


class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=` + API_KEY + `&libraries=geometry,places`;
    script.id = 'googleMaps';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.addEventListener('load', e => {
      this.onScriptLoad()
    })

  }

  onScriptLoad() {
    map = new window.google.maps.Map(document.getElementById(this.props.id), this.props.options);
    this.props.onMapLoad(map)

    var request = {
      query: 'Museum of Contemporary Art Australia',
      fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          var place = results[i];
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.formatted_address,
          });
          markers.push(marker);

          infowindow = new google.maps.InfoWindow();

          marker.addListener('click', () => {
            infowindow.setContent(place.name);
            infowindow.open(map, marker);
          });
        }
        map.setCenter(results[0].geometry.location);
      }

    })
  }


  render() {
    return (
      <div id="root" >
        <div className="map" id={this.props.id} />
      </div>

    )
  }
}

export default Map;