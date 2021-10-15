import { Typography } from "@mui/material";
import React from "react";

import styles from "../../../styles/home/developers.module.css";
import ClearContainer from "../../customComponents/ClearContainer";
import CustomHeight from "../../customComponents/CustomHeight";
import { Grid } from "@mui/material";
import PrimaryButton from "../primaryButton";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { useTheme } from "@emotion/react";

const Developers = ({id}) => {
  const theme = useTheme();

  return (
    <div className={styles.root} id={id}>
      <ClearContainer>
        <CustomHeight height="5rem" />
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Developers
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="textSecondary"
        >
          Welcome to the ARCHEthic Developer Portal to discover all there is to
          ARCHEthic its architecture and ecosystem, deploying smart contracts,
          and setting up !
        </Typography>
        <CustomHeight height="3rem" />
        <div className={styles.developersImageWrapper}>
          <img
            defer
            src="/assets/OMIro1.png"
            alt="aebot and technology"
            className={styles.developersImage}
          />
        </div>
        <CustomHeight height="3rem" />
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PrimaryButton text="Github" />
              <CustomHeight height="1.5rem" />
              <Typography
                variant="body"
                color="textSecondary"
                textAlign="center"
              >
                Get started with the Core Infrastructure and the SDK tools
                available to get renumerated in UCOs
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PrimaryButton text="Explorer" />
              <CustomHeight height="1.5rem" />
              <Typography
                variant="body"
                color="textSecondary"
                textAlign="center"
              >
                View all the information associated with blocks, addresses, and
                past and current transactions on ARCHEthic.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PrimaryButton text="Docs" />
              <CustomHeight height="1.5rem" />
              <Typography
                variant="body"
                color="textSecondary"
                textAlign="center"
              >
                Docs is a place to get started and aims to provide a brief
                description about the ARCHEthic protocol & ecosystem.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <CustomHeight height="3rem" />
        <Divider sx={{ background: theme.palette.lines.main }}></Divider>
      </ClearContainer>
    </div>
  );
};

export default Developers;
