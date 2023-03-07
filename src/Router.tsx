import { element } from "prop-types";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WikiPage from "./pages/WikiPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<HomePage />}
      />
      <Route 
      path={"/wiki"}
      element={<WikiPage/>}/>
    </Routes>
  );
};

export default Router;
