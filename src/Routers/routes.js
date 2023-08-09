import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { History } from "../Helpers/history";
import { RouteGuard } from "../components/RouteGuard";


function Routes() {
  return (
      <Router history = {History}>
          <RouteGuard path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Router>
  );
}

export default Routes;