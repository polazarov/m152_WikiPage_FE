import { element } from "prop-types";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import HomePage from "./pages/HomePage/HomePage";
import Wiki from "./pages/Wiki/Wiki";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<HomePage />}
      />
      <Route
        path={"/ourTeam"}
        element={<AboutUs />}
      />
        <Route
        path={"/wiki"}
        element={<Wiki />}
      />
    </Routes>
  );
};

export default Router;
