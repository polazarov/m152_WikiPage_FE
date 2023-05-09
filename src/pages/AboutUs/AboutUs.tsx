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
import Footer from "../../organisms/Footer";

export default function AboutUs() {
  let ourTeam = [
    {
      name: "Shawn Lacarta",
      age: 18,
      carrer: "Junior Software Developer",
      picture: "../pics/lacarta.jpg",
    },
    {
      name: "Anojan Pirabakaran",
      age: 18,
      carrer: "Junior Software Developer",
      picture: "../pics/pirabakaran.jpg",
    },
    {
      name: "Enes Spahiu",
      age: 18,
      carrer: "Junior Software Developer",
      picture: "../pics/spahiu.jpg",
    },
    {
      name: "Matijas Polazarov",
      age: 18,
      carrer: "Junior Software Developer",
      picture: "../pics/polazarov.jpg",
    },
  ];

  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div>
        <div className="aboutUs_title">Our Team</div>

        <div className="texttext">
          "Empowering the future through technology."
        </div>
      </div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyItems="center"
        className="outerdiv"
      >
        {ourTeam.map((worker) => {
          return (
            <Grid md={6}>
              <Card sx={{ maxWidth: 500, marginTop: 20 }} className="innerdiv">
                <CardMedia sx={{ height: 400 }} image={worker.picture} />
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
      <Footer />
    </>
  );
}
