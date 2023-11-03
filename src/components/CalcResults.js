import React from "react";
import FullWidthGrid from "./GridResults";

function CalcResults(props) {
  const result = localStorage.getItem("sumResult");
  return (
    <div>
      <h1>Chosen Locations Attenuation</h1>
      <FullWidthGrid />
      <h3>{result}</h3>
    </div>
  );
}

export default CalcResults;
