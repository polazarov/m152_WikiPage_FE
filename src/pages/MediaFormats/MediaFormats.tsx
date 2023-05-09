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
        JPEG (Joint Photographic Experts Group) is a compressed image format that supports up to 16 million colors. It is commonly used for photographs because of its ability to compress images while still maintaining high-quality.
        PNG (Portable Network Graphics) is a lossless image format that supports transparency. It is often used for graphics because it can create images with sharp edges and high contrast.
        GIF (Graphics Interchange Format) is a compressed image format that supports animation. It is often used for simple animations or to display short video clips.
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
        MP4 (MPEG-4 Part 14) is a compressed video format that is widely used on the web because of its compatibility with most devices and its ability to produce high-quality video.
        WebM is a free, open-source video format that is often used on the web because of its high-quality video and small file size.
        OGG is a free, open-source video format that is similar to WebM. It is often used as an alternative to MP4 because of its high-quality video and smaller file size.
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Audio: The most common audio formats for the web are MP3, AAC, and Ogg. MP3 is the most widely used audio format and is supported by most browsers. However, AAC offers higher sound quality with a smaller file size.
        OGG is a free, open-source audio format that is similar to MP3. It is often used as an alternative to MP3 because of its high sound quality and smaller file size.
        MP3 (MPEG Audio Layer III) is a compressed audio format that is widely used on the web because of its small file size and compatibility with most devices.
        AAC is a popular format for music files and is known for its high-quality sound and efficient compression.
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
        PDF (Portable Document Format) is a document format that is widely used on the web because it preserves the formatting and layout of a document, regardless of the device or software being used to view it.
        HTML (Hypertext Markup Language) is the standard markup language used to create web pages and other web content.
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
