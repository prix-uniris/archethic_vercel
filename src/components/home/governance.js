import { Typography } from "@mui/material";
import React from "react";
import ClearContainer from "../../customComponents/ClearContainer";
import CustomHeight from "../../customComponents/CustomHeight";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Collapse, Grow } from "@mui/material";
import { Divider } from "@mui/material";
import styles from "../../../styles/home/governance.module.css";
import { useMediaQuery, useTheme } from "@mui/material";

import UpIcon from "@mui/icons-material/ArrowUpward";
import DownIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";

const CustomCard = ({ iconPath, heading, children }) => {
  const isLessThan560Px = useMediaQuery("(max-width: 560px)");
  const isLessThan450Px = useMediaQuery("(max-width: 450px)");
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const getIconBtn = () => {
    if (open) {
      return (
        <IconButton onClick={() => setOpen(!open)}>
          <UpIcon sx={{ color: theme.palette.primary.dark }} />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={() => setOpen(!open)}>
          <DownIcon sx={{ color: theme.palette.primary.dark }} />
        </IconButton>
      );
    }
  };

  return (
    <Grid
      container
      sx={{ display: "flex", width: "100%", justifyContent: "flex-start" }}
    >
      <Grid
        item
        sm={3}
        sx={{
          width: "100%",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image width={"100%"} height={"100%"} src={iconPath} />
      </Grid>
      <Grid
        item
        sm={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            component={"h6"}
            gutterBottom
            color="primary"
            fontWeight="bold"
            textAlign={isLessThan560Px ? "center" : "start"}
          >
            {heading}
          </Typography>
          {isLessThan560Px && getIconBtn()}
        </Box>
        <Box>
          {isLessThan560Px ? (
            <Grow
              in={open}
              style={{ transformOrigin: "0 0 0" }}
              unmountOnExit={isLessThan560Px}
            >
              {children}
            </Grow>
          ) : (
            children
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const Governance = ({id}) => {
  return (
    <div className={styles.root} id={id}>
      <CustomHeight height="5rem" />
      <ClearContainer>
        <Typography variant="h2" component="h2" gutterBottom textAlign="center">
          Governance
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          textAlign="center"
        >
          A Governance that integrates the best of everyone
        </Typography>
        <CustomHeight height="2rem" />
        <ClearContainer></ClearContainer>
        <Typography variant="h5" component="h5" textAlign="center">
          The governance of the ARCHEthic Blockchain is based on these technical
          and functional fundamentals
        </Typography>
        <CustomHeight height="2rem" />
        <Grid container spacing={3}>
          <Grid item md={6}>
            <CustomCard
              iconPath="/icons/Blockchain.svg"
              heading="Decentralized Identity & Proof of Identity"
            >
              <Typography variant="subtitle2" color="textSecondary">
                An essential prerequisite for a human-inclusive governance: the
                ability of the ecosystem to uniquely identify a person and to
                integrate that person into a relevant group.
              </Typography>
            </CustomCard>
            <CustomHeight height="1em" />
            <CustomCard
              iconPath="/icons/Document.svg"
              heading="Modifiable Smart-Contract"
            >
              <Typography variant="subtitle2" color="textSecondary">
                Each smart-contract is stored in the form of a specific
                transaction chain allowing the network to version (git...) all
                updates, and also to force each update according to a specific
                governance (voting quorum, veto right...).
              </Typography>
            </CustomCard>
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <CustomCard iconPath="/icons/Computer.svg" heading="On-Chain">
              <Typography variant="subtitle2" color="textSecondary">
                The code used by the nodes is hosted by the Blockchain itself,
                so the network is certain that all the nodes will immediately
                apply the decided updates. The ArchEthic Blockchain is also
                equipped with the ability to test the impact of a new feature in
                real-time.
              </Typography>
            </CustomCard>
            <CustomHeight height="1em" />
            <CustomCard iconPath="/icons/Wallet.svg" heading="Incentives">
              <Typography variant="subtitle2" color="textSecondary">
                Financing the work associated with updates, new features, and
                contributions is an essential element. The network has a reserve
                of one-third of the tokens for this purpose.
              </Typography>
            </CustomCard>
          </Grid>
        </Grid>
        <CustomHeight height="2rem" />
        <Divider sx={{ background: "rgba(255, 255, 255, 0.1)" }}></Divider>
      </ClearContainer>
      <CustomHeight height="3rem" />
    </div>
  );
};

export default Governance;
