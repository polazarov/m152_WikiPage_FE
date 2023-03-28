import React from "react";
import "./AboutUs.css";
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

export default function AboutUs() {
  let ourTeam = [
    {
      name: "Shawn Lacarta",
      age: 18,
      carrer: "Junior Software Developer",
    },
    {
      name: "Anojan Pirabakaran",
      age: 18,
      carrer: "Junior Software Developer",
    },
    {
      name: "Enes Spahiu",
      age: 18,
      carrer: "Junior Software Developer",
    },
    {
      name: "Matijas Polazarov",
      age: 18,
      carrer: "Junior Software Developer",
    },
  ];

  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="aboutUs_title">Our Team</div>
      <Grid container spacing={0} alignItems="center" justifyItems="center">
          {ourTeam.map((worker) => {
            return (<Grid md={5}> 
              <Card sx={{ maxWidth: 345, marginTop: 20 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {worker.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {worker.age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {worker.carrer}
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
