// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel to Puerto Rico</h1>
        </header>
        <Travel
          destination= "Culebra"
          country= "Puerto Rico"
          photo= "https://media.istockphoto.com/photos/rusted-army-tank-on-flamenco-beach-in-culebra-island-pr-picture-id482043457?k=6&m=482043457&s=612x612&w=0&h=jPefcDD3BrasYcBZcIHnkPmAhsd_zEP_E5P7CJFvVDU="
          distance= "47"
        />
        <Travel
          destination= "San Juan"
          country= "Puerto Rico"
          photo= "https://media.telemundopr.com/images/987*716/15895885_1938231736400903_8931370227912325947_o.jpg"
          distance= "23"
        />
      </div>
    );
  }
}

export default App;