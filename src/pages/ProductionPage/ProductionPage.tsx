import { Grid } from "@mui/material";

import React from "react";

import HamburgerMenu from "../../atoms/HamburgerMenu";
import "./ProductionPage.css";

export default function ProductionPage() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about the production</div>
      <Grid container style={{ marginTop: "15%" }}>
      
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Adobe Premiere Pro is professional video editing software used by many filmmakers, video producers, and YouTubers. The software offers an extensive range of features and tools to import videos, edit them, add effects and export them in various formats. Adobe Premiere Pro is powerful software that is suitable for both beginners and experienced video editors. It offers a comprehensive collection of tools and functions to create and edit professional videos.
        </Grid>
        <Grid item xs={2}>
          <img
            src="../pics/premiere-pro.png"
            alt=""
            style={{ height: "190px" }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img
            src="../pics/ableton-live.png"
            alt=""
            style={{ height: "190px" }}
          />
        </Grid>
        <Grid item xs={8}>
        Ableton Live is professional music production and live performance software. It was specially developed for electronic music and composing tracks in real time. Very popular with music producers, DJs and live musicians, Ableton Live is characterized by its unique way of working. Ableton Live is extremely flexible and powerful software for musicians and music producers. It allows you to explore, develop, and perform your musical ideas in real-time, and offers a variety of tools and features to unleash your creativity.
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Adobe Dreamweaver is professional web design software
          Development. It allows users to design websites, too
          develop and manage, regardless of their technical
          Experience. Dreamweaver combines visual design and
          Code editing to provide a comprehensive environment for creation
          to provide more attractive and functional websites. Adobe Dreamweaver
          is powerful web design and development software that
          suitable for both novice and experienced developers.
          It offers an intuitive user interface, visual
          Design options and powerful code editing tools to
          Build beautiful, feature-rich websites.
        </Grid>
        <Grid item xs={2}>
          <img
            src="../pics/adobe-dreamweaver.png"
            alt=""
            style={{ height: "190px" }}
          />
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
