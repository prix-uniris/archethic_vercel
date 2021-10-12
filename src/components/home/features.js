import React from "react";

import { Grid, Typography } from "@mui/material";

import ClearContainer from "../../customComponents/ClearContainer";

const Features = () => {
  return (
    <ClearContainer>
      <Grid container>
        <Typography variant={"h3"} component={"h3"}>
          Pillars of ARCHEthic Blockchain Ecosystem
        </Typography>
        <Typography>
          The technical and functional pillars that make ARCHEthic unique and
          ready for global adoption.
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={3}></Grid>
        <Grid item sm={3}></Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </ClearContainer>
  );
};

export default Features;
