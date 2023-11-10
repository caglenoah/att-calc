import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post("https://att-calc-backend.onrender.com/register", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)

    navigate("/login");
  };
  console.log(state.username);
  console.log(state.password);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={register}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
