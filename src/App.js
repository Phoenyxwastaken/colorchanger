import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";

function App() {
  const [colorName, setColorName] = useState("");
  const [empty, stateColor] = useState(undefined);
  document.body.style.backgroundColor = stateColor;

  useEffect(() => {
    fetch(`http://thecolorapi.com/id?hex=${stateColor}`)
      .then((response) => response.json())
      .then((colors) => setColorName(colors.name.value));
  }, [stateColor]);

  return (
    <div className="App">
      <h1>Color Changer</h1>
      <TextField label="Enter Color" type="string" onChange={stateColor} />
      <br />
      Die Farbe heißt: {colorName}
    </div>
  );
}

export default App;
