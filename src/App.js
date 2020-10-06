import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";

function App() {
  const getColor = (e) => {
    console.log(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  return (
    <div className="App">
      <h1>Color Changer</h1>
      <TextField label="Enter Color" type="string" onChange={getColor} />
    </div>
  );
}

export default App;
