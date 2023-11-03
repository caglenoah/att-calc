import React from "react";
import { Button } from "@mui/material";

function Landing() {
  return (
    <div>
      <h1>
        Welcome to the attenuation calculation station, no more trepidation,
        where the relation of ease to creation creats elation at any station
      </h1>
      <p>continue to login</p>
      <Button
        type="submit"
        className="login-button"
        variant="contained"
        color="primary"
      >
        to login
      </Button>
    </div>
  );
}

export default Landing;
