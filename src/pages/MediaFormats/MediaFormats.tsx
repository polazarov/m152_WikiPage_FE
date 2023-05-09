import { Grid } from "@mui/material";

import React from "react";

import HamburgerMenu from "../../atoms/HamburgerMenu";
import "./MediaFormats.css";
import Footer from "../../organisms/Footer";

export default function MediaFormats() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Media and file formats for the web</div>
      <Grid container style={{ marginTop: "15%" }}>
      
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Images: The most common image formats for the web are JPEG, PNG, and GIF. JPEG works best for photos, PNG works best for graphics and logos with transparent backgrounds, and GIF works best for animations.
        </Grid>
        <Grid item xs={2}>
          <img
            src="../pics/jpeg-png-gif.jpg"
            alt=""
            style={{ height: "190px" }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img
            src="../pics/html5-supports-video-formats-en.png"
            alt=""
            style={{ height: "250px" }}
          />
        </Grid>
        <Grid item xs={8}>
        Videos: The most common video formats for the web are MP4, WebM, and Ogg. Supported by most browsers, MP4 is the most widely used video format. However, WebM and Ogg are open formats and may offer better compression and quality.
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Audio: The most common audio formats for the web are MP3, AAC, and Ogg. MP3 is the most widely used audio format and is supported by most browsers. However, AAC offers higher sound quality with a smaller file size.
        Ogg is an open format and may offer better quality with a smaller file size.
        </Grid>
        <Grid item xs={2}>
          <img
            src="../pics/aac-vs-ogg-devices.JPG"
            alt=""
            style={{ height: "190px" }}
          />
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img
            src="../pics/pdfHtml.jpg"
            alt=""
            style={{ height: "190px" }}
          />
        </Grid>
        <Grid item xs={8}>
        Documents: The most common document formats for the web are PDF and HTML. PDF files are easy to open and read, and can be opened from almost any device.
        HTML is the basis of the World Wide Web and enables the creation of websites.
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
