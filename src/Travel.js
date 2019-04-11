import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <h2>{destination}, {country}</h2>
    <img className= "pics" src={photo} alt=""/>
    <p>Driving distance from SJU airport: {distance} km</p>
  </figure>
);

export default Travel;