import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";


export default function Routes() {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
}