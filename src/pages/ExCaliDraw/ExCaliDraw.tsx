import React from "react";
import "./ExCaliDraw.css";
import { Button, Grid, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function ExCaliDraw() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about ExCaliDraw</div>
      <iframe
        width="1118"
        height="629"
        src="https://www.youtube.com/embed/9O6qwD-HuA0"
        title="Lernvideo Shawn Lacarta"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="inner_div">
        <Typography className="inner_text">
          ExcaliDraw is a free online vector graphics program. This handy
          application allows users to quickly and easily create diagrams,
          flowcharts, mind maps and other visual elements. ExcaliDraw is
          especially useful for remote teams as the generated graphics can be
          easily exported to other applications such as Google Docs, Microsoft
          Office and Slack. ExcaliDraw's user interface is intuitive and easy to
          use, even for those unfamiliar with vector graphics or graphic design
          software. The tool also offers a variety of shapes, symbols and line
          types that can be customized to any project. Another great advantage
          of ExcaliDraw is the ability to edit graphics in real time and share
          them with other users. This allows teams to work together and exchange
          ideas as if they were in the same room. All in all, ExcaliDraw is a
          great choice for teams that need to create attractive graphics and
          collaborate quickly and easily. With easy-to-use features and seamless
          integration with other applications, it is a valuable addition to any
          toolkit.
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
      </div>
      <Footer />
    </>
  );
}
