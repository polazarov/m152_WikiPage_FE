import { Grid } from "@mui/material";

import React from "react";

import HamburgerMenu from "../../atoms/HamburgerMenu";
import "./MediaFormats.css";

export default function MediaFormats() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Medien und Dateiformate für das Web</div>
      <Grid container style={{ marginTop: "15%" }}>
      
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Bilder: Die gängigsten Bildformate für das Web sind JPEG, PNG und GIF. JPEG eignet sich am besten für Fotos, 
        PNG eignet sich am besten für Grafiken und Logos mit transparentem Hintergrund und GIF eignet sich am besten für Animationen.
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
        Videos: Die gängigsten Videoformate für das Web sind MP4, WebM und Ogg. MP4 wird von den meisten Browsern unterstützt und ist das am weitesten verbreitete Videoformat. 
        WebM und Ogg sind jedoch offene Formate und bieten möglicherweise bessere Komprimierung und Qualität.
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
        Audio: Die gängigsten Audioformate für das Web sind MP3, AAC und Ogg. MP3 ist das am weitesten verbreitete Audioformat und wird von den meisten Browsern unterstützt. AAC bietet jedoch eine höhere Klangqualität bei geringerer Dateigröße. 
        Ogg ist ein offenes Format und bietet möglicherweise bessere Qualität bei geringerer Dateigröße.
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
        Dokumente: Die gängigsten Dokumentenformate für das Web sind PDF und HTML. PDF-Dateien sind einfach zu öffnen und zu lesen, und können von fast jedem Gerät geöffnet werden. 
        HTML ist die Grundlage des World Wide Web und ermöglicht die Erstellung von Webseiten.
        </Grid>
      </Grid>
    </>
  );
}
