import React from "react";
import "./GitHub.css";
import { Button, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function GitHub() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about ExCaliDraw</div>
      <div className="inner_div">
        <Typography className="inner_text">
          GitHub ist eine webbasierte Plattform für Versionskontrolle und
          kollaborative Softwareentwicklung. Sie ermöglicht Entwicklern,
          gemeinsam an Projekten zu arbeiten, den Quellcode zu verwalten,
          Änderungen nachzuverfolgen und Feedback zu geben. GitHub basiert auf
          dem verteilten Versionskontrollsystem Git und bietet eine
          benutzerfreundliche Oberfläche, die es Entwicklern ermöglicht, ihre
          Projekte zu hosten, zu veröffentlichen und zu verwalten. Jedes Projekt
          wird in einem sogenannten "Repository" (Repo) gespeichert, in dem alle
          Dateien, Ordner, Änderungen und Historien des Codes verwaltet werden.
          Die Plattform bietet Funktionen wie Branching und Merging, um
          parallele Entwicklungsstränge zu ermöglichen und Änderungen effizient
          zusammenzuführen. Entwickler können Pull Requests erstellen, um
          Änderungen vorzuschlagen und Feedback von Teammitgliedern zu erhalten,
          bevor sie in den Hauptcode integriert werden. GitHub ermöglicht auch
          die Zusammenarbeit in Teams. Entwickler können Probleme (Issues)
          melden, Diskussionen führen und Aufgaben verfolgen. Darüber hinaus
          bietet es Funktionen wie Wikis, Projektmanagement-Tools und Continuous
          Integration, um die Effizienz und Qualität der Softwareentwicklung zu
          verbessern. Die Plattform ist nicht nur auf Open-Source-Projekte
          beschränkt, sondern wird auch von Unternehmen für ihre privaten
          Projekte verwendet. GitHub bietet sowohl kostenlose als auch
          kostenpflichtige Abonnementpläne mit erweiterten Funktionen und
          Optionen zur Verwaltung von privaten Repositories. Insgesamt ist
          GitHub zu einem wichtigen Werkzeug für Entwickler und Teams geworden,
          um gemeinsam an Projekten zu arbeiten, Code zu verwalten und die
          Zusammenarbeit in der Softwareentwicklung zu erleichtern.
        </Typography>

        <Button className="button" variant="contained">
          How the video was made
        </Button>
      </div>
      <Footer />
    </>
  );
}
