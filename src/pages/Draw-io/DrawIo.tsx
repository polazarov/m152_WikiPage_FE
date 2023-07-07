import React from "react";
import "./Draw-io.css";
import { Button, Grid, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function DrawIo() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about Draw.io</div>
      <iframe
        width="1118"
        height="629"
        src="https://www.youtube.com/embed/o98pF0F7i0c"
        title="Lernvideo Enes Spahiu"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="inner_div">
        <Typography className="inner_text">
          Draw.io is a web-based diagram and flowchart tool that allows users to
          quickly and easily create diagrams, organization charts, flowcharts,
          network diagrams, and many other types of visual representations. The
          tool offers a user-friendly interface with a variety of icons and
          templates that make it easy to visualize complex ideas and
          information. Draw.io allows users to create their diagrams directly in
          the web browser without the need to install software or plugins. It
          offers intuitive drag-and-drop functionality that allows users to
          select icons and shapes from the library and simply drag them onto the
          drawing surface. The elements can be easily moved, scaled, and
          formatted to achieve the desired display. Draw.io also supports
          real-time collaboration, allowing multiple users to work on a diagram
          at the same time. It offers various ways to share and export diagrams,
          including saving them in different file formats such as PDF, PNG or
          SVG. The tool is available free of charge for both personal and
          commercial use, yet offers a wealth of features and customization
          options. It is cross-platform and can be used on different devices and
          operating systems. Overall, Draw.io provides a simple and powerful
          solution for creating diagrams and visuals that are useful for both
          individuals and teams.
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
