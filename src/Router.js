import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";
import NewQuery from "./components/NewQuery";
import Calculator from "./components/Calculator";
import CalcResults from "./components/CalcResults";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/newquery" element={<NewQuery />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/calcresults" element={<CalcResults />} />
    </Routes>
  );
};

export default Router;
