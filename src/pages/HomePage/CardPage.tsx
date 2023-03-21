import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomCard from "../../components/CustomCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CardPage() {
  return (
    <>
    <div className="topRow">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <CustomCard />
          </Grid>
          <Grid item xs={4}>
            <CustomCard />
          </Grid>
          <Grid item xs={4}>
            <CustomCard />
          </Grid>
        </Grid>
      </Box>
      </div>
      <div className="bottomRow">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <CustomCard />
          </Grid>
          <Grid item xs={4}>
            <CustomCard />
          </Grid>
          <Grid item xs={4}>
            <CustomCard />
          </Grid>
        </Grid>
      </Box>
    </div>
    </>
  );
}
