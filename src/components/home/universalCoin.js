import { Divider, Typography } from "@mui/material";
import React from "react";

import styles from "../../../styles/home/uco.module.css";
import ClearContainer from "../../customComponents/ClearContainer";
import CustomHeight from "../../customComponents/CustomHeight";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const ContentValue = () => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box
          sx={{
            borderRight: `1px solid ${theme.palette.lines.main}`,
          }}
        >
          <CustomHeight height="2.5em" />
          <Typography
            textAlign="center"
            variant="h6"
            component="h6"
            fontWeight="800"
            color="primary"
            gutterBottom
          >
            64M
          </Typography>
          <Typography textAlign="center">Market Cap</Typography>
          <CustomHeight height="2.5em" />
        </Box>
        <Box
          sx={{
            borderRight: `1px solid ${theme.palette.lines.main}`,
            borderTop: `1px solid ${theme.palette.lines.main}`,
          }}
        >
          <CustomHeight height="2.5em" />
          <Typography
            textAlign="center"
            variant="h6"
            component="h6"
            fontWeight="800"
            color="primary"
            gutterBottom
          >
            0.000124 $
          </Typography>
          <Typography textAlign="center">USD Price</Typography>
          <CustomHeight height="2.5em" />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{}}>
          <CustomHeight height="2.5em" />
          <Typography
            textAlign="center"
            variant="h6"
            component="h6"
            fontWeight="800"
            color="primary"
            gutterBottom
          >
            1.8B
          </Typography>
          <Typography textAlign="center">Total Supply</Typography>
          <CustomHeight height="2.5em" />
        </Box>
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.lines.main}`,
          }}
        >
          <CustomHeight height="2.5em" />
          <Typography
            textAlign="center"
            variant="h6"
            component="h6"
            fontWeight="800"
            color="primary"
            gutterBottom
          >
            216M
          </Typography>
          <Typography textAlign="center">Circulating Supply</Typography>
          <CustomHeight height="2.5em" />
        </Box>
      </Grid>
    </Grid>
  );
};

const TokenChart = () => {
  const theme = useTheme();
  const data = [
    {
      name: "Network Pool",
      value: 448,
      fill: "#1F5EA8",
    },
    {
      name: "Deliverables",
      value: 233,
      fill: "#4895EF",
    },
    {
      name: "Funding Pool",
      value: 82,
      fill: "#3F37C9",
    },
    {
      name: "Enhancements",
      value: 90,
      fill: "#38a3a5",
    },
    {
      name: "Team",
      value: 56,
      fill: "#2A9D8F",
    },
    {
      name: "Exchange Pf",
      value: 34,
      fill: "#fb5607",
    },
    {
      name: "Marketing",
      value: 32,
      fill: "#B5179E",
    },
    {
      name: "Foundation",
      value: 22,
      fill: "#F72585",
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "25px",
  };

  const getIntroOfPage = (label) => {
    if (label === "Network Pool") {
      return "This will be allocated to the Network Itself.";
    }
    if (label === "Deliverables") {
      return "Allocated to deliverables for the blockchain.";
    }
    if (label === "Funding Pool") {
      return "Pools to supply value in the markets.";
    }
    if (label === "Enhancements") {
      return "Network, Protocol and Blockchain Enhancements.";
    }
    if (label === "Team") {
      return "Allocated to the team building the project.";
    }
    if (label === "Exchange Pf") {
      return "Dedicated to Exchange Platform Fees.";
    }
    if (label === "Marketing") {
      return "Dedicated to Marketing Activites for Blockchain.";
    }
    if (label === "Foundation") {
      return "Fixed for Foundation Members and Team.";
    }
    return "";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p style={{ color: theme.palette.primary.main }}>{`${
            payload[0].name
          } : ${payload[0].value / 10} %`}</p>
          <p className="intro">{getIntroOfPage(payload[0].name)}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid item sm={6} sx={{ width: "100%" }}>
        {data.map((item) => {
          return (
            <div className={styles.legendWrapper} key={item.name}>
              <div>
                <div
                  style={{
                    background: item.fill,
                    height: "20px",
                    width: "20px",
                  }}
                ></div>
              </div>
              <div className={styles.chartLegendTextWrapper}>
                <Typography
                  textAlign="center"
                  color="textSecondary"
                  gutterBottom
                >
                  {item.name}
                </Typography>
                <Typography
                  textAlign="center"
                  color="textSecondary"
                  gutterBottom
                >
                  {item.value / 10} %
                </Typography>
              </div>
            </div>
          );
        })}
        <Typography></Typography>
      </Grid>
      <Grid item sm={6} sx={{ width: "100%", minHeight: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={data}
              innerRadius={65}
              outerRadius={95}
            />
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

const UniversalCoin = ({ id }) => {
  const theme = useTheme();
  const isLessThan600Px = useMediaQuery("(max-width: 600px)");

  return (
    <div className={styles.root} id={id}>
      <ClearContainer>
        <CustomHeight height="5rem" />
        <Typography variant="h2" component="h2" textAlign="center">
          Universal Coin (UCO)
        </Typography>
        <CustomHeight height="2rem" />
        <div className={styles.rubicWrapper}>
          <div id="rubic-widget-root"></div>
        </div>
        <CustomHeight height="1em" />
        <div>
          <Typography
            variant="h5"
            component="h5"
            gutterBottom
            textAlign={isLessThan600Px ? "center" : "start"}
          >
            UCO is listed on
          </Typography>
          <CustomHeight height="2em" />
          <Grid container>
            <Grid
              item
              sm={3}
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                borderRight: isLessThan600Px
                  ? ""
                  : `1px solid ${theme.palette.text.secondary}`,
                padding: `2em 0em`,
                width: "100%",
              }}
            >
              <img
                src="/partners/1.svg"
                alt="zeibtix"
                className={styles.image}
                defer
              />
            </Grid>
            <Grid
              item
              sm={3}
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                borderRight: isLessThan600Px
                  ? ""
                  : `1px solid ${theme.palette.text.secondary}`,
                padding: `2em 0em`,
                width: "100%",
              }}
            >
              <img
                src="/partners/2.png"
                alt="probit"
                className={styles.image}
                defer
              />
            </Grid>
            <Grid
              item
              sm={3}
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                borderRight: isLessThan600Px
                  ? ""
                  : `1px solid ${theme.palette.text.secondary}`,
                padding: `2em 0em`,
                width: "100%",
              }}
            >
              <img
                src="/partners/3.png"
                alt="bitthumb"
                className={styles.image}
                defer
              />
            </Grid>
            <Grid
              item
              sm={3}
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                padding: `2em 0em`,
                width: "100%",
              }}
            >
              <img
                src="/partners/4.svg"
                alt="uniswap"
                className={styles.image}
                defer
              />
            </Grid>
          </Grid>
        </div>
        <CustomHeight height="3em" />
        <div>
          <Grid container spacing={3}>
            <Grid item sm={6} sx={{ width: "100%" }}>
              <ContentValue />
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h5" component="h5" fontWeight="bold">
                UCO - Programmed to grow
              </Typography>
              <CustomHeight height="1.5em" />
              <Typography variant="body" color="textSecondary">
                Designed for large-scale use and therefore mass adoption. The
                number of UCO tokens, the initial value of the UCO, as well as
                the market capitalization, are initialized according to the
                means required for the implementation of the ecosystem according
                to the growth hypotheses and priorities of the project. In the
                ICO, two actors have been privileged:
                <br />- Early Investors: the near-exclusivity of available
                tokens during the first two years will be those of the ICO.
                <br />- The Contributors mobilized up to the delivery of the
                ecosystem.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <CustomHeight height="3em" />
        <div>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Typography variant="h5" component="h5" fontWeight="bold">
                Token Allocation
              </Typography>
              <CustomHeight height="1.5em" />
              <Typography variant="body" color="textSecondary">
                Except of the tokens sold, all other Universal Coins tokens
                (UCO) will be locked by smart contracts (20-33%/year over 3-5
                years). The 23.6% “Deliverables” tokens will only be distributed
                to developers/contributors when the features will be available
                on the network. The 9% tokens allocated to “Enhancements” will
                be used to develop new use cases but may only be sold when the
                value of the UCOs is greater than 100x the initial value (i.e.
                0.7€/UCO).
              </Typography>
            </Grid>
            <Grid item sm={6} sx={{ width: "100%" }}>
              <TokenChart />
            </Grid>
          </Grid>
        </div>
        <Divider sx={{ background: theme.palette.lines.main }}></Divider>
      </ClearContainer>
    </div>
  );
};

export default UniversalCoin;
