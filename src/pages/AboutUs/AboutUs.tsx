import React from 'react'
import './AboutUs.css'
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export default function AboutUs() {

    let ourTeam = [
        {
            "name": "Shawn Lacarta",
            "age": 18,
            "carrer": "Junior Software Developer"
        },
        {
            "name": "Anokinglolman",
            "age": 18,
            "carrer": "Junior Software Developer"
        },
        {
            "name": "Enes Spiau",
            "age": 18,
            "carrer": "Junior Software Developer"
        },
        {
            "name": "Matijas Palagrekos",
            "age": 18,
            "carrer": "Junior Software Developer"
        }
    ]


  return (
    <>
    <div className='aboutUs_title'>Our Team</div>
    {ourTeam.map((worker) => {
         return <div> 
            <Grid md={5}>
            <Card sx={{ maxWidth: 345 }}>
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
      </Card></Grid></div>
    })}
    </>
  )
}
