import React from "react";
import "./Draw-io.css";
import { Button, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function DrawIo() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about ExCaliDraw</div>
      <div className="inner_div">
        <Typography className="inner_text">
          Draw.io ist ein webbasiertes Diagramm- und Flussdiagrammwerkzeug, das
          es Benutzern ermöglicht, schnell und einfach Diagramme, Organigramme,
          Flussdiagramme, Netzwerkdiagramme und viele andere Arten von visuellen
          Darstellungen zu erstellen. Das Tool bietet eine benutzerfreundliche
          Oberfläche mit einer Vielzahl von Symbolen und Vorlagen, die es
          einfach machen, komplexe Ideen und Informationen zu visualisieren. Mit
          Draw.io können Benutzer ihre Diagramme direkt im Webbrowser erstellen,
          ohne dass eine Installation von Software oder Plugins erforderlich
          ist. Es bietet eine intuitive Drag-and-Drop-Funktionalität, mit der
          Benutzer Symbole und Formen aus der Bibliothek auswählen und sie
          einfach auf die Zeichenfläche ziehen können. Die Elemente können
          leicht verschoben, skaliert und formatiert werden, um die gewünschte
          Darstellung zu erreichen. Draw.io unterstützt auch die Zusammenarbeit
          in Echtzeit, sodass mehrere Benutzer gleichzeitig an einem Diagramm
          arbeiten können. Es bietet verschiedene Möglichkeiten, Diagramme zu
          teilen und zu exportieren, darunter das Speichern in verschiedenen
          Dateiformaten wie PDF, PNG oder SVG. Das Tool ist sowohl für
          persönliche als auch für kommerzielle Zwecke kostenlos verfügbar und
          bietet dennoch eine Fülle von Funktionen und Anpassungsoptionen. Es
          ist plattformübergreifend und kann auf verschiedenen Geräten und
          Betriebssystemen verwendet werden. Insgesamt bietet Draw.io eine
          einfache und leistungsstarke Lösung zur Erstellung von Diagrammen und
          visuellen Darstellungen, die sowohl für Einzelpersonen als auch für
          Teams nützlich ist.
        </Typography>

        <Button className="button" variant="contained">
          How the video was made
        </Button>
      </div>
      <Footer />
    </>
  );
}
