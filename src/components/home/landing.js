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

import { useTheme } from "@mui/material/styles";

const Landing = () => {
  const theme = useTheme();

  return (
    <ClearContainer style={{ position: "realtive", height: "100vh" }}>
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
        <ClearGrid container>
          <ClearGrid item sm={10}>
            <div class={styles.contentWrap}>
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
                <PrimaryButton text="Buy UCO" />
                <PrimaryButton text="Join the Community" />
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
          </ClearGrid>
          <ClearGrid item sm={2}>

          </ClearGrid>
        </ClearGrid>
      </ClearContainer>
    </ClearContainer>
  );
};

export default Landing;
