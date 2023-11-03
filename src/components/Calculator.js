import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/Calculator.css";

function Calculator() {
  const navigate = useNavigate();

  const [nums, setNums] = useState({
    num1: 0,
    num2: 0,
  });

  const handleTextChange = (e) => {
    const newState = { ...nums };
    newState[e.target.id] = e.target.value;
    setNums(newState);
  };

  const handleClick = (e) => {
    const sum = nums.num1 + nums.num2;
    console.log(sum);
    localStorage.setItem("sumResult", sum);
    navigate("/calcresults");
  };

  return (
    <div className="calculator_textField">
      <TextField
        id="num1"
        name="num1"
        label="num1"
        placeholder="num"
        value={nums.num1}
        onChange={(e) => handleTextChange(e)}
        required
      />

      <TextField
        id="num2"
        name="num2"
        label="num2"
        placeholder="num"
        value={nums.num2}
        onChange={(e) => handleTextChange(e)}
        required
      />
      <TextField
        id="num1"
        name="num1"
        label="Location Elevation"
        placeholder="num"
        value={nums.num1}
        onChange={(e) => handleTextChange(e)}
        required
      />

      <TextField
        id="num2"
        name="num2"
        label="Relative Humidity"
        placeholder="num"
        value={nums.num2}
        onChange={(e) => handleTextChange(e)}
        required
      />
      <TextField
        id="num2"
        name="num2"
        label="Atmospheric Pressure"
        placeholder="num"
        value={nums.num2}
        onChange={(e) => handleTextChange(e)}
        required
      />
      <TextField
        id="num2"
        name="num2"
        label="Temperature"
        placeholder="num"
        value={nums.num2}
        onChange={(e) => handleTextChange(e)}
        required
      />
      <TextField
        id="num2"
        name="num2"
        label="Local Vapor Pressure"
        placeholder="num"
        value={nums.num2}
        onChange={(e) => handleTextChange(e)}
        required
      />
      <TextField
        id="num2"
        name="num2"
        label="rho"
        placeholder="num"
        value={nums.num2}
        onChange={(e) => handleTextChange(e)}
        required
      />
      <Button variant="contained" onClick={handleClick}>
        Is this data correct?
      </Button>
    </div>
  );
}

export default Calculator;
