import React from "react";

import Travel from "./Travel";

const array = [{
          destination: "Culebra",
          country: "Puerto Rico",
          photo: "https://media.istockphoto.com/photos/rusted-army-tank-on-flamenco-beach-in-culebra-island-pr-picture-id482043457?k=6&m=482043457&s=612x612&w=0&h=jPefcDD3BrasYcBZcIHnkPmAhsd_zEP_E5P7CJFvVDU=",
          distance: "87"
}, {
          destination: "San Juan",
          country: "Puerto Rico",
          photo: "https://media.telemundopr.com/images/987*716/15895885_1938231736400903_8931370227912325947_o.jpg",
          distance: "23"
}, {
          destination: "Barranquitas",
          country: "Puerto Rico",
          photo: "https://media-cdn.tripadvisor.com/media/photo-s/09/81/b4/97/aviones.jpg",
          distance: "62"
}, {
          destination: "Yauco",
          country: "Puerto Rico",
          photo: "https://www.puertoricodaytrips.com/wp-images-1000x560/yaucromatic-1.jpg",
          distance: "146"
}, {
          destination: "Vieques",
          country: "Puerto Rico",
          photo: "https://www.nautimermaidcharters.com/wp-content/uploads/2017/01/2horses-beach-1500x750.jpg",
          distance: "93"
}]

const Travels = () => (
    <div>
      <h2>Travels</h2>
      {array.map(item => (
        <Travel
          destination= {item.destination}
          country= {item.country}
          photo= {item.photo}
          distance= {item.distance}
        />
      ))}
    </div>
);

export default Travels;