import React from "react";
import "./ExCaliDraw.css";
import { Button, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function ExCaliDraw() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about ExCaliDraw</div>
      <div className="inner_div">
      <Typography className="inner_text">
        ExcaliDraw ist ein kostenloses Online-Vektorgrafikprogramm. Mit dieser
        praktischen Anwendung können Benutzer schnell und einfach Diagramme,
        Flussdiagramme, Mindmaps und andere visuelle Elemente erstellen.
        ExcaliDraw ist besonders nützlich für Remote-Teams, da die generierten
        Grafiken einfach in andere Anwendungen wie Google Docs, Microsoft Office
        und Slack exportiert werden können. Die Benutzeroberfläche von
        ExcaliDraw ist intuitiv und einfach zu bedienen, selbst für diejenigen,
        die mit Vektorgrafiken oder Grafikdesign-Software nicht vertraut sind.
        Das Tool bietet auch eine Vielzahl von Formen, Symbolen und Linientypen,
        die an jedes Projekt angepasst werden können. Ein weiterer großer
        Vorteil von ExcaliDraw ist die Möglichkeit, Grafiken in Echtzeit zu
        bearbeiten und mit anderen Benutzern zu teilen. Auf diese Weise können
        Teams zusammenarbeiten und Ideen austauschen, als ob sie sich im selben
        Raum befänden. Alles in allem ist ExcaliDraw eine großartige Wahl für
        Teams, die schnell und einfach attraktive Grafiken erstellen und
        zusammenarbeiten müssen. Mit benutzerfreundlichen Funktionen und
        nahtloser Integration mit anderen Anwendungen ist es eine wertvolle
        Ergänzung für jedes Toolkit.
      </Typography>
      

      <Button className="button" variant="contained">How the video was made</Button>
      </div>
      <Footer />
    </>
  );
}
