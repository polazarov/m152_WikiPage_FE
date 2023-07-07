import React from "react";
import "./Homebrew.css";
import { Button, Grid, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function Homebrew() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about Homebrew</div>
      <iframe
        width="1118"
        height="629"
        src="https://www.youtube.com/embed/pZLDJTECG_g"
        title="Lernvideo Matijas Polazarov"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="inner_div">
        <Typography className="inner_text">
          Homebrew is a popular open source package management system for macOS.
          It allows users to easily install software and libraries from the
          command line. With Homebrew, users can access an extensive collection
          of precompiled packages and install them quickly and easily on their
          Mac systems. Homebrew makes it easy to install developer tools,
          programming languages, libraries, and applications that are not
          included by default in macOS. It allows users to search, install,
          update and manage packages via a simple command line interface. The
          system takes care of dependencies and ensures that the required
          components are installed correctly. One of Homebrew's strengths is its
          active community, which is constantly updating and adding new
          packages. Users can also create their own formulas to manage custom
          software or, for example, to install developer versions of programs.
          Homebrew also offers the ability to install and switch between
          alternative versions of software, which is particularly useful for
          developers and testers. In addition, it provides features such as
          deleting packages, displaying information about packages, and
          customizing the configuration as needed. With Homebrew, users can
          easily manage their software updates and get the latest versions of
          their favorite apps without having to wait for macOS system updates.
          Overall, Homebrew is a powerful and flexible package management system
          for macOS that allows users to efficiently manage their software
          environment and quickly access new tools and libraries.
        </Typography>

        <Grid container spacing={0} alignItems="center" justifyItems="center">
          <Grid md={4}></Grid>{" "}
          <Grid md={4}>
            {" "}
            <a href="/videomaking">
              {" "}
              <Button
                sx={{ width: "100%", marginTop: "3em" }}
                className="button"
                variant="contained"
              >
                How the video was made{" "}
              </Button>{" "}
            </a>{" "}
          </Grid>
        </Grid>

        <a href="/videomaking">
      <Button className="button" variant="contained">How the video was made</Button></a>
      </div>
      <Footer />
    </>
  );
}
