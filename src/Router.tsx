import { element } from "prop-types";
import React from "react";
import { Route, Routes } from "react-router-dom";
import WikiPage from "./pages/WikiPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import HomePage from "./pages/HomePage/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/wiki"} element={<WikiPage />} />
      <Route path={"/ourTeam"} element={<AboutUs />} />
    </Routes>
  );
};

export default Router;
