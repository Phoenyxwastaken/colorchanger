import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles({
  app: {
    color: ({ contrastColor }) => contrastColor,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
    },
    "& h1": {
      marginTop: 0,
    },
  },
  textField: {
    color: ({ contrastColor }) => contrastColor,
  },
});

function App() {
  const [colorName, setColorName] = useState("");
  const [contrastColor, setContrastColor] = useState("#000");
  const [stateColor, setStateColor] = useState("#fff");
  const classes = useStyle({ contrastColor });
  document.body.style.backgroundColor = stateColor;

  useEffect(() => {
    if (stateColor.trim() !== "") {
      fetch(
        `https://www.thecolorapi.com/id?hex=${encodeURIComponent(stateColor)}`
      )
        .then(response => response.json())
        .then(colors => {
          setColorName(colors?.name?.value || "Not found");
          setContrastColor(colors?.contrast?.value || "#000");
        });
    }
  }, [stateColor]);

  return (
    <div className={classes.app}>
      <div>
        <h1>Color Changer</h1>
        <TextField
          label="Enter Color"
          value={stateColor}
          inputProps={{
            className: classes.textField,
          }}
          onChange={({ target: { value } }) => setStateColor(value)}
        />
        <br />
        <br />
        Farbe heißt: {colorName}
      </div>
    </div>
  );
}

export default App;
