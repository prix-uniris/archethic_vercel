import { Typography } from "@mui/material";
import React from "react";

import styles from "../../../styles/home/community.module.css";
import ClearContainer from "../../customComponents/ClearContainer";
import CustomHeight from "../../customComponents/CustomHeight";
import { Grid } from "@mui/material";
import PrimaryButton from "../primaryButton";
import { Box } from "@mui/system";

const Community = () => {
  return (
    <div className={styles.root}>
      <ClearContainer>
        <CustomHeight height="5rem" />
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Community
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="textSecondary"
        >
          Developers, investors, crypto-enthusiasts and everyday users around
          the world are working together to build a trusted digital era. Come
          join the global ARCHEthic community.
        </Typography>
        <CustomHeight height="3rem" />

        <CustomHeight height="3rem" />
        <Grid container spacing={2}>
          <Grid item sm={6}>

          </Grid>
          <Grid item sm={6}>

          </Grid>
        </Grid>
        <CustomHeight height="3rem" />
      </ClearContainer>
    </div>
  );
};

export default Community;
