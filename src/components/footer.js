import React from "react";

import styles from "../../styles/footer.module.css";

import ClearContainer from "../customComponents/ClearContainer";
import CustomHeight from "../customComponents/CustomHeight";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
import PrimaryButton from "./primaryButton";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import { useMediaQuery } from "@mui/material";
import { Divider } from "@mui/material";

import { IconButton } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import SocialMedia from "./socialMedia";

const CssOutlinedInput = styled(OutlinedInput)((theme) => ({
  background: "rgba(255, 255, 255, 0.05)",
}));

const Footer = () => {
  const theme = useTheme();

  const isLessThan600Px = useMediaQuery("(max-width: 600px");

  const handleChange = (prop) => (event) => {};

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.root}>
      <ClearContainer>
        <CustomHeight height="5em" />
        <Grid
          container
          spacing={1}
          sx={{ flexDirection: isLessThan600Px ? "column" : "row" }}
        >
          <Grid item sm={3}>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              color="primary"
              fontWeight="bold"
              textAlign="center"
            >
              About
            </Typography>
            <div>
              <Typography textAlign="center">Legal</Typography>
            </div>
            <div>
              <Typography textAlign="center">FAQ</Typography>
            </div>
            <div>
              <Typography textAlign="center">Media</Typography>
            </div>
          </Grid>
          <Grid item sm={3}>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              color="primary"
              fontWeight="bold"
              textAlign="center"
            >
              Technology
            </Typography>
            <div>
              <Typography textAlign="center">Universal Token</Typography>
            </div>
            <div>
              <Typography textAlign="center">Technical Papers</Typography>
            </div>
            <div>
              <Typography textAlign="center">Archethic Wiki</Typography>
            </div>
            <div>
              <Typography textAlign="center">Ethic Explorer</Typography>
            </div>
            <div>
              <Typography textAlign="center">Governance</Typography>
            </div>
          </Grid>
          <Grid item sm={3}>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              color="primary"
              fontWeight="bold"
              textAlign="center"
            >
              Developers
            </Typography>
            <div>
              <Typography textAlign="center">Documentation</Typography>
            </div>
            <div>
              <Typography textAlign="center">Github</Typography>
            </div>
            <div>
              <Typography textAlign="center">ArchEthic-Gitter</Typography>
            </div>
          </Grid>
          <Grid item sm={3}>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              color="primary"
              fontWeight="bold"
              textAlign="center"
            >
              Others
            </Typography>
            <div>
              <Typography textAlign="center">Buy UCO</Typography>
            </div>
            <div>
              <Typography textAlign="center">Syrup Pool</Typography>
            </div>
            <div>
              <Typography textAlign="center">Blog</Typography>
            </div>
          </Grid>
        </Grid>
        <CustomHeight height="2em" />
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <img width="100%" src="/assets/logo/archethic-white.png" />
          </Grid>
          <Grid item sm={1} />
          <Grid item sm={8}>
            <Grid container>
              <Grid item md={6}>
                <Typography
                  variant="h5"
                  component="h5"
                  fontWeight="bold"
                  gutterBottom
                >
                  Subscribe Newletter
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  Keep updated with the latest happening of ARCHEthic
                  Blockchain!
                </Typography>
                <CustomHeight height="2rem" />
                <div>
                  <CssOutlinedInput
                    placeholder="Enter your email to get subscribed"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="subscribe email"
                          onClick={handleChange}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          <ArrowRightAlt color="primary" />
                        </IconButton>
                      </InputAdornment>
                    }
                    fullWidth
                  ></CssOutlinedInput>
                </div>
                <CustomHeight height="1rem" />
                <SocialMedia />
              </Grid>
              <Grid item md={6}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <CustomHeight height="2em" />
        <Divider sx={{ background: theme.palette.lines.main }}></Divider>
        <CustomHeight height="2em" />
        <Grid container spacing={3}>
          <Grid item sm={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              className={styles.footerBottomLink}
              color="text.secondary"
            >
              &copy; Archethic 2021
            </Typography>
          </Grid>
          <Grid item sm={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              className={styles.footerBottomLink}
              color="text.secondary"
            >
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item sm={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              className={styles.footerBottomLink}
              color="text.secondary"
            >
              Terms of Use
            </Typography>
          </Grid>
          <Grid item sm={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              className={styles.footerBottomLink}
              color="text.secondary"
            >
              GDPR Compilance
            </Typography>
          </Grid>
        </Grid>
        <CustomHeight height="1em" />
      </ClearContainer>
    </div>
  );
};

export default Footer;
