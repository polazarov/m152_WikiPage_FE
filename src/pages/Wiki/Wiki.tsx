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

export default function Wiki() {
  let ourTeam = [
    {
      title: "ExCaliDraw",
      image: "",
      text: "Junior Software Developer",
    },
    {
      title: "Homebrew",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "Draw.io",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "Git",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "Die wichtigsten Medin- und Dateiformate für das Web",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "Diese Software empfehlen wir für die Medienproduktion",
      image: 18,
      text: "Junior Software Developer",
    },
  ];

  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Get your knowledge</div>
      <Grid container spacing={0} alignItems="center" justifyItems="center" className="outerdiv">
          {ourTeam.map((worker) => {
            return (<Grid md={4}> 
              <Card sx={{ maxWidth: 345, marginTop: 20 }} className="innerdiv">
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="card_title">
                    {worker.title}
                  </Typography>
                </CardContent>
              </Card>
              </Grid>
            );
          })}
        
      </Grid>
    </>
  );
}
