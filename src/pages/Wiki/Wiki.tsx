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
  let ourTeam = [
    {
      title: "How do i take notes efficiantly",
      image: "",
      text: "Junior Software Developer",
    },
    {
      title: "How to make a life easier as a mac user",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "Which tool to use for working with diagramms",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "How do i work with others efficiantly",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "What media and file formats to use for the web",
      image: 18,
      text: "Junior Software Developer",
    },
    {
      title: "Which software to use for media production",
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
                  image="src/pics/shawn.JPG"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="card_title">
                    {worker.title}
                  </Typography>
                </CardContent>
                <Button variant="contained" sx={{marginBottom: 3}}>Learn more</Button>
              </Card>
              </Grid>
            );
          })}
        
      </Grid>
      <Footer/>
    </>
  );
}
