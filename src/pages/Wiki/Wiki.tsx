import React from "react";
import "./Wiki.css";
import Card from "@mui/material/Card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function Wiki() {

  type TeamType = {
    title: string,
    image: string,
    text: string,
    url: string
  }

  let ourTeam: TeamType[] = [
    {
      title: "How do i take notes efficiantly",
      image: "../pics/excalidraw.jpg",
      text: "Junior Software Developer",
      url: "/excalidraw"
    },
    {
      title: "How to make a life easier as a mac user",
      image: "../pics/homebrew.jpg",
      text: "Junior Software Developer",
      url: "/excalidraw"
    },
    {
      title: "Which tool to use for working with diagramms",
      image: "../pics/draw-io.jpg",
      text: "Junior Software Developer",
      url: "/excalidraw"
    },
    {
      title: "How do i work with others efficiantly",
      image: "../pics/github.jpg",
      text: "Junior Software Developer",
      url: "/excalidraw"
    },
    {
      title: "What media and file formats to use for the web",
      image: "../pics/videoformats.jpg",
      text: "Junior Software Developer",
      url: "/excalidraw"
    },
    {
      title: "Which software to use for media production",
      image: "../pics/mediaproduction.jpg",
      text: "Junior Software Developer",
      url: "/excalidraw"
    },
  ];

  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Get your knowledge</div>
      <Grid container spacing={0} alignItems="center" justifyItems="center" className="outerdiv">
          {ourTeam.map((worker) => {
            return (<Grid md={4}> 
              <Card sx={{ maxWidth: 345, marginTop: 20, height: 400 }} className="innerdiv">
              <CardMedia
                component="img"
                height="200"
                image={worker.image}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="card_title">
                    {worker.title}
                  </Typography>
                </CardContent>
                <a href={worker.url}>
                <Button variant="contained" sx={{marginBottom: 3}}>Learn more</Button>
                </a>
              </Card>
              </Grid>
            );
          })}
        
      </Grid>
      <Footer/>
    </>
  );
}
