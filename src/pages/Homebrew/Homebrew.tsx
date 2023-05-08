import React from "react";
import "./Homebrew.css";
import { Button, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function Homebrew() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about ExCaliDraw</div>
      <div className="inner_div">
        <Typography className="inner_text">
          Homebrew ist ein beliebtes Open-Source-Paketverwaltungssystem für
          macOS. Es ermöglicht Benutzern die einfache Installation von Software
          und Bibliotheken über die Kommandozeile. Mit Homebrew können Benutzer
          auf eine umfangreiche Sammlung von vorkompilierten Paketen zugreifen
          und diese schnell und unkompliziert auf ihren Mac-Systemen
          installieren. Homebrew erleichtert die Installation von
          Entwicklertools, Programmiersprachen, Bibliotheken und Anwendungen,
          die nicht standardmäßig in macOS enthalten sind. Es ermöglicht
          Benutzern, Pakete über ein einfaches Kommandozeileninterface zu
          suchen, zu installieren, zu aktualisieren und zu verwalten. Das System
          kümmert sich um Abhängigkeiten und stellt sicher, dass die benötigten
          Komponenten korrekt installiert werden. Eine der Stärken von Homebrew
          liegt in seiner aktiven Community, die ständig neue Pakete
          aktualisiert und hinzufügt. Benutzer können auch eigene Formeln
          erstellen, um benutzerdefinierte Software zu verwalten oder
          beispielsweise Entwicklerversionen von Programmen zu installieren.
          Homebrew bietet auch die Möglichkeit, alternative Versionen von
          Software zu installieren und zwischen ihnen zu wechseln, was für
          Entwickler und Tester besonders nützlich ist. Darüber hinaus bietet es
          Funktionen wie das Löschen von Paketen, das Anzeigen von Informationen
          über Pakete und das Anpassen der Konfiguration nach Bedarf. Mit
          Homebrew können Benutzer ihre Softwareaktualisierungen einfach
          verwalten und von den neuesten Versionen ihrer bevorzugten Anwendungen
          profitieren, ohne auf macOS-Systemupdates warten zu müssen. Insgesamt
          ist Homebrew ein leistungsfähiges und flexibles Paketverwaltungssystem
          für macOS, das Benutzern ermöglicht, ihre Softwareumgebung effizient
          zu verwalten und schnell auf neue Tools und Bibliotheken zuzugreifen.
        </Typography>

        <Button className="button" variant="contained">
          How the video was made
        </Button>
      </div>
      <Footer />
    </>
  );
}
