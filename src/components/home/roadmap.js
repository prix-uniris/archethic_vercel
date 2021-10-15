import { Typography } from "@mui/material";
import React from "react";

import styles from "../../../styles/home/community.module.css";
import ClearContainer from "../../customComponents/ClearContainer";
import CustomHeight from "../../customComponents/CustomHeight";
import { Grid } from "@mui/material";
import { Divider } from "@mui/material";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import { useTheme } from "@mui/material";

const Roadmap = ({id}) => {
  const theme = useTheme();
  const customTheme = createTheme(themes.default, {
    timeline: {
      backgroundColor: "none",
      fontSize: "1rem",
      padding: "2px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Lato, "Segoe UI", Roboto, Helvetica,\n  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      a: {
        color: "yellow",
      },
    },
    timelineTrack: {
      left: "50%",
      width: "2px",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      content: "''",
      background: "linear-gradient(to bottom,  #d85bcf 0%,#f0799d 100%);",
    },
    marker: {
      backgroundColor: theme.palette.primary.main,
      border: "2px solid #fff",
      borderRadius: "50%",
      width: "16px",
      height: "16px",
      zIndex: 100,
      left: "1px",
    },
    card: {
      borderRadius: "4px",
      backgroundColor: "#1B2944",
      color: "#fff",
      padding: "10px",
      boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
      width: "100%",
      maxWidth: "560px",
      a: {
        color: "#EC24B5",
      },
    },
    button: {
      fontSize: "14px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "4px",
      padding: "4px",
      color: "#fff",
      margin: "10px 5px 5px 0",
      border: "none",
      cursor: "pointer",
    },
    urlButton: {
      fontSize: "14px",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "4px",
      padding: "6px",
      margin: "10px 5px 5px 0",
      border: "none",
      color: "#fff",
    },
    date: {
      backgroundColor: theme.palette.primary.main,
      padding: "6px",
      color: "#fff",
      borderRadius: "4px",
      fontWeight: 500,
      fontSize: ".85rem",
    },
    imageAtom: {
      objectFit: "cover",
      overflow: "hidden",
      width: "100%",
      maxHeight: "400px",
    },
    imageCredit: {
      marginTop: "10px",
      fontSize: "0.85rem",
    },
    imageText: {
      marginBottom: "10px",
      fontSize: "1rem",
    },
    youTubeText: {
      marginBottom: "10px",
      fontSize: "1rem",
    },
    events: {
      padding: "10px",
    },
    event: {
      marginBottom: "20px",
    },
    textAtom: {},
  });

  return (
    <div className={styles.root} id={id}>
      <ClearContainer>
        <CustomHeight height="5rem" />
        <Grid container>
          <Grid item sm={2} />
          <Grid item sm={8}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              gutterBottom
            >
              Roadmap
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="center"
              color="textSecondary"
            >
              Our proud milestones, that are being achieved rapidly
            </Typography>
          </Grid>
          <Grid item sm={2} />
        </Grid>

        <CustomHeight height="3rem" />
        <ClearContainer sx={{ maxHeight: "500px", overflowY: "scroll" }}>
          <Timeline theme={customTheme}>
            <Events>
              <ImageEvent
                date="13 Oct, 2021"
                text="ARCHEthic offers Geo-Secured Data which means that our network can survive any disaster as a result of its Heuristic Replication Algorithms, Geographic and Network Coordinates, Beacon Chains, Oracles & Prediction Module."
                src="https://images.unsplash.com/photo-1456428746267-a1756408f782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="archtehic"
                credit="Photo by [@clintadair](https://unsplash.com/@clintadair)"
              >
                <div>
                  <UrlButton href="https://twitter.com/archethic/status/1448348001924177931">
                    View original Tweet
                  </UrlButton>
                </div>
              </ImageEvent>
              <TextEvent date="Q3, 2021" text="">
                <Typography variant="body2" color="textSecondary">
                  Transaction Chain
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Transaction Validation (Distributed / POW / Sharding)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  UCO transaction
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  NFT
                </Typography>
              </TextEvent>
              <YouTubeEvent
                date="28 Sep, 2021"
                id="iiK-WVZCPpE"
                name="What are ARCHEthic Smart Contracts? How can they design any service or application on ARCHEthic?"
                text="Archethic and Smart Contracts"
              />
              <TextEvent date="Q4, 2021" text="">
                <Typography variant="body2" color="textSecondary">
                  TokenSwap
                </Typography>
              </TextEvent>
              <TextEvent date="Q1, 2022" text="">
                <Typography variant="body2" color="textSecondary">
                  Staking (activation function)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Staking (for node enrollment)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Malicious detection implementation
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Manage origin keys (renewal / device sign-in)
                </Typography>
              </TextEvent>
              <TextEvent date="Q2, 2022" text="">
                <Typography variant="body2" color="textSecondary">
                  Fully fledged Mobile Wallet
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  NFC functionality for Mobile Wallet
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Keychain access with Yubikey
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  On chain Governance (for code upgrades)
                </Typography>
              </TextEvent>
              <TextEvent date="Q3, 2022" text="">
                <Typography variant="body2" color="textSecondary">
                  Prediction Module
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Advanced OnChain Governance
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email integration (Client side integration)
                </Typography>
              </TextEvent>
            </Events>
          </Timeline>
        </ClearContainer>
        <CustomHeight height="4rem" />
        <Divider sx={{ background: theme.palette.lines.main }}></Divider>
      </ClearContainer>
    </div>
  );
};

export default Roadmap;
