import React from "react";
import { Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CardItem from "./cardItem";

const Card = () => {
  const items = useSelector((state) => state.data);

  return (
    <Grid container>
      {items.data.map((e) => (
        <CardItem props={e} />
      ))}
    </Grid>
  );
};

export default Card;
