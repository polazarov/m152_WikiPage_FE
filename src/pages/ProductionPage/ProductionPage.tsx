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
          Adobe Premiere Pro ist eine professionelle Videobearbeitungssoftware,
          die von vielen Filmemachern, Videoproduzenten und YouTubern verwendet
          wird. Die Software bietet eine umfangreiche Palette an Funktionen und
          Tools, um Videos zu importieren, zu bearbeiten, Effekte hinzuzufügen
          und sie in verschiedenen Formaten zu exportieren. Adobe Premiere Pro
          ist eine leistungsstarke Software, die sowohl für Anfänger als auch
          für erfahrene Videobearbeiter geeignet ist. Sie bietet eine umfassende
          Sammlung von Werkzeugen und Funktionen, um professionelle Videos zu
          erstellen und zu bearbeiten.
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
          Ableton Live ist eine professionelle Software für Musikproduktion und
          Live-Performance. Sie wurde speziell für elektronische Musik und das
          Komponieren von Tracks in Echtzeit entwickelt. Ableton Live ist bei
          Musikproduzenten, DJs und Live-Musikern sehr beliebt und zeichnet sich
          durch seine einzigartige Arbeitsweise aus. Ableton Live ist eine
          äußerst flexible und leistungsstarke Software für Musiker und
          Musikproduzenten. Es ermöglicht Ihnen, Ihre musikalischen Ideen in
          Echtzeit zu erforschen, zu entwickeln und zu performen, und bietet
          eine Vielzahl von Werkzeugen und Funktionen, um Ihre Kreativität zu
          entfalten.
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          Adobe Dreamweaver ist eine professionelle Software für Webdesign und
          Entwicklung. Sie ermöglicht es Benutzern, Websites zu entwerfen, zu
          entwickeln und zu verwalten, unabhängig von ihrer technischen
          Erfahrung. Dreamweaver kombiniert visuelles Design und
          Code-Bearbeitung, um eine umfassende Umgebung für die Erstellung
          ansprechender und funktionaler Websites zu bieten. Adobe Dreamweaver
          ist eine leistungsstarke Software für Webdesign und -entwicklung, die
          sowohl für Anfänger als auch für erfahrene Entwickler geeignet ist.
          Sie bietet eine intuitive Benutzeroberfläche, visuelle
          Gestaltungsmöglichkeiten und leistungsstarke Code-Editing-Tools, um
          ansprechende und funktionsreiche Websites zu erstellen.
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
