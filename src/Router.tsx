import { element } from "prop-types";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import HomePage from "./pages/HomePage/HomePage";
import Wiki from "./pages/Wiki/Wiki";
import ExCaliDraw from "./pages/ExCaliDraw/ExCaliDraw";
import ProductionPage from "./pages/ProductionPage/ProductionPage";
import GitHub from "./pages/GitHub/GitHub";
import DrawIo from "./pages/Draw-io/DrawIo";
import Homebrew from "./pages/Homebrew/Homebrew";
import MediaFormats from "./pages/MediaFormats/MediaFormats";
import VideoMaking from "./pages/VideoMaking/VideoMaking";

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
      <Route
        path={"/excalidraw"}
        element={<ExCaliDraw />}
      />
      <Route
        path={"/homebrew"}
        element={<Homebrew />}
      />
      <Route
        path={"/drawio"}
        element={<DrawIo />}
      />
      <Route
        path={"/github"}
        element={<GitHub />}
      />
      <Route
        path={"/productionpage"}
        element={<ProductionPage />}
      />
      <Route
        path={"/mediaformats"}
        element={<MediaFormats />}
      />
      <Route
        path={"/videomaking"}
        element={<VideoMaking />}
      />
    </Routes>
  );
};

export default Router;
