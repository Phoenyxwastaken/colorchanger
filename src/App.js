import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";

function App() {
  const [empty, stateColor] = useState(undefined);
  document.body.style.backgroundColor = stateColor;
  useEffect(() => {
    fetch("http://thecolorapi.com")
      .then((response) => response.json())
      .then((colors) => console.log(colors));
  }, [stateColor]);
  console.log();

  return (
    <div className="App">
      <h1>Color Changer</h1>
      <TextField label="Enter Color" type="string" onChange={stateColor} />
      <p></p>
    </div>
  );
}

export default App;
