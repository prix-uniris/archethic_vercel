import React from "react";

import styles from "../../../styles/home/landing.module.css";
import ClearContainer from "../../customComponents/ClearContainer";
import ClearGrid from "../../customComponents/ClearGrid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../primaryButton";
import CustomHeight from "../../customComponents/CustomHeight";
import IconButton from "@mui/material/IconButton";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import SocialMedia from "../socialMedia";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Landing = () => {
  const theme = useTheme();
  const isLessThan600Px = useMediaQuery("(max-width: 600px)");

  return (
    <ClearContainer style={{ position: "realtive" }}>
      <video
        className={styles.video_landing}
        autoPlay
        loop
        muted
        poster="./assets/video_poster.jpg"
      >
        <source src="./assets/video.webm" type="video/webm" />
      </video>
      <div className={styles.video_overlay}></div>
      <ClearContainer maxWidth="xl">
        <Grid container>
          <Grid item sm={10}>
            <div className={styles.contentWrap}>
              <Typography variant="h2" component="h2">
                Welcome to the <br />
                Internet of Trust
              </Typography>
              <Typography color="textSecondary">
                ARCHEthic gives back to humanity control over technology, and to
                each individual, control over their identity
              </Typography>
              <CustomHeight height="2rem" />
              <div>
                <PrimaryButton
                  text="Buy UCO"
                  onClick={() => {
                    window.location.href = "#uco-landing";
                  }}
                />
                <PrimaryButton
                  text="Join the Community"
                  onClick={() => {
                    window.location.href = "#community-landing";
                  }}
                />
                <IconButton>
                  <PlayCircleOutlineIcon
                    style={{
                      fontSize: "3rem",
                      lineHeight: "1rem",
                      color: theme.palette.text.primary,
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isLessThan600Px ? "center" : "flex-end",
              width: "100%",
            }}
          >
            <SocialMedia orientation={isLessThan600Px ? "row" : "column"} />
          </Grid>
        </Grid>
      </ClearContainer>
    </ClearContainer>
  );
};

export default Landing;
