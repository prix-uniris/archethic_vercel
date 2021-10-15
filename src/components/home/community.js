import { Typography } from "@mui/material";
import React from "react";

import styles from "../../../styles/home/community.module.css";
import ClearContainer from "../../customComponents/ClearContainer";
import CustomHeight from "../../customComponents/CustomHeight";
import { Grid } from "@mui/material";
import PrimaryButton from "../primaryButton";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Image from "next/image";

const communityObjs = {
  developers: [
    {
      id: "1",
      heading: "Trapdoors and Cryptography",
      imgPath: "/assets/community/1/1.png",
      duration: "16 June, 2021",
      linkPath: "https://uniris.io/blog/trapdoors-and-cryptography/",
    },
    {
      id: "2",
      heading: "Trapdoors and Cryptography",
      imgPath: "/assets/community/1/1.png",
      duration: "16 June, 2021",
      linkPath: "https://uniris.io/blog/trapdoors-and-cryptography/",
    },
    {
      id: "3",
      heading: "Trapdoors and Cryptography",
      imgPath: "/assets/community/1/1.png",
      duration: "16 June, 2021",
      linkPath: "https://uniris.io/blog/trapdoors-and-cryptography/",
    },
    {
      id: "4",
      heading: "Trapdoors and Cryptography",
      imgPath: "/assets/community/1/1.png",
      duration: "16 June, 2021",
      linkPath: "https://uniris.io/blog/trapdoors-and-cryptography/",
    },
    {
      id: "5",
      heading: "Trapdoors and Cryptography",
      imgPath: "/assets/community/1/1.png",
      duration: "16 June, 2021",
      linkPath: "https://uniris.io/blog/trapdoors-and-cryptography/",
    },
  ],
  investors: [
    {
      id: "1",
      heading: "Asset Tokenization: The Future is here",
      imgPath: "/assets/community/2/2.png",
      duration: "23 June, 2021",
      linkPath: "https://uniris.io/blog/asset-tokenization-the-future-is-here/",
    },
  ],
  technology: [
    {
      id: "1",
      heading: "ArchEthic Blockchain Mainnet & Testnet",
      imgPath: "/assets/community/3/3.png",
      duration: "21 June, 2021",
      linkPath: "https://uniris.io/blog/mainnet-testnet-roadmap/",
    },
  ],
  archers: [
    {
      id: "1",
      heading: "The Riddle of Post-Quantum Cryptography",
      imgPath: "/assets/community/4/4.png",
      duration: "08 July, 2021",
      linkPath:
        "https://uniris.io/blog/the-riddle-of-post-quantum-cryptography/",
    },
    {
      id: "2",
      heading: "The Riddle of Post-Quantum Cryptography",
      imgPath: "/assets/community/4/4.png",
      duration: "08 July, 2021",
      linkPath:
        "https://uniris.io/blog/the-riddle-of-post-quantum-cryptography/",
    },
  ],
};

const CommunityCard = ({ imgPath, heading, duration, linkPath, children }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        padding: "5px",
        transition: "background 0.3s ease",
        borderRadius: "5px",
        "&:hover": {
          cursor: "pointer",
          background: "rgba(255, 255, 255, 0.05)",
        },
      }}
      onClick={() => window.open(linkPath)}
    >
      <Grid
        item
        xs={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Image height="100%" width="100%" src={imgPath} />
      </Grid>
      <Grid item xs={10} sx={{ paddingLeft: "10px" }}>
        <Typography
          variant={"h6"}
          component="h6"
          color="text.secondary"
          sx={{ lineHeight: "1.2rem" }}
          gutterBottom
        >
          {heading}
        </Typography>
        <div className={styles.captionTimeWrapper}>
          <AvTimerIcon
            color="primary"
            sx={{ fontSize: "1rem", marginRight: "8px" }}
          />
          <Typography variant="caption" color="text.secondary">
            {`  ${duration}`}
          </Typography>
        </div>
        {children}
      </Grid>
    </Grid>
  );
};

const Community = ({ id }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
              Community
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="center"
              color="textSecondary"
            >
              Developers, investors, crypto-enthusiasts and everyday users
              around the world are working together to build a trusted digital
              era. Come join the global ARCHEthic community.
            </Typography>
          </Grid>
          <Grid item sm={2} />
        </Grid>

        <CustomHeight height="3rem" />
        <Grid container>
          <Grid item sm={2} />
          <Grid
            item
            sm={8}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.socialIconWrapper}>
              <a href="https://github.com/archethic-foundation" target="_blank">
                <img src="/assets/social-icons/Github.svg" alt="github" defer />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a href="https://discord.com/invite/CJZJvVReBx" target="_blank">
                <img
                  src="/assets/social-icons/discord.svg"
                  alt="discord"
                  defer
                />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a href="https://www.reddit.com/r/ArchEthic/" target="_blank">
                <img src="/assets/social-icons/Reddit.svg" alt="reddit" defer />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a href="https://twitter.com/archethic" target="_blank">
                <img
                  src="/assets/social-icons/Twitter.svg"
                  alt="twitter"
                  defer
                />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a
                href="https://www.instagram.com/the_official_archethic/"
                target="_blank"
                defer
              >
                <img
                  src="/assets/social-icons/Instagram.svg"
                  alt="instagram"
                  defer
                />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a href="https://t.me/ArchEthic_ENG" target="_blank">
                <img src="/assets/social-icons/Telegram.svg" alt="telegram" />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a
                href="https://www.youtube.com/channel/UCmP7Sg_TdBfbO1_u4EyIKzg"
                target="_blank"
              >
                <img
                  src="/assets/social-icons/YouTube.svg"
                  alt="youtube"
                  defer
                />
              </a>
            </div>
            <div className={styles.socialIconWrapper}>
              <a
                href="https://www.youtube.com/channel/UCmP7Sg_TdBfbO1_u4EyIKzg"
                target="_blank"
              >
                <img
                  src="/assets/social-icons/podcast.svg"
                  alt="podcast"
                  defer
                />
              </a>
            </div>
          </Grid>
          <Grid item sm={2} />
        </Grid>
        <CustomHeight height="3rem" />
        <Grid container spacing={2}>
          <Grid item sm={1} />
          <Grid item sm={10}>
            <Grid container spacing={2}>
              <Grid
                item
                sm={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Card sx={{ background: "none" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/assets/community/bw_archethic.jpg"
                    alt="green iguana"
                    defer
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      What is Uniris, ARCHEthic and ARCHEthic Foundation?
                    </Typography>
                    <div className={styles.captionTimeWrapper}>
                      <AvTimerIcon color="primary" />
                      <Typography variant="caption" color="text.secondary">
                        {" "}
                        27 September, 2021
                      </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                      ARCHEthic Public Blockchain offers the first integrated
                      services platform capable of meeting a fundamental need:
                      giving everyone back the control over technology.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="outlined">
                      Read more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item sm={6}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Developers
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Articles to build
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        maxHeight: "200px",
                        overflow: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      {communityObjs.developers.map((article) => {
                        return (
                          <ListItem key={article.id}>
                            <CommunityCard
                              key={article.id}
                              imgPath={article.imgPath}
                              heading={article.heading}
                              duration={article.duration}
                              linkPath={article.linkPath}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Crypto Investors
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Getting know about tokeneconomics
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        maxHeight: "200px",
                        overflow: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      {communityObjs.investors.map((article) => {
                        return (
                          <ListItem key={article.id}>
                            <CommunityCard
                              key={article.id}
                              imgPath={article.imgPath}
                              heading={article.heading}
                              duration={article.duration}
                              linkPath={article.linkPath}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Tech Updates
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Lates Updates on Protocol and Tech
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        maxHeight: "200px",
                        overflow: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      {communityObjs.technology.map((article) => {
                        return (
                          <ListItem key={article.id}>
                            <CommunityCard
                              key={article.id}
                              imgPath={article.imgPath}
                              heading={article.heading}
                              duration={article.duration}
                              linkPath={article.linkPath}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Archers
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        maxHeight: "200px",
                        overflow: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      {communityObjs.archers.map((article) => {
                        return (
                          <ListItem key={article.id}>
                            <CommunityCard
                              key={article.id}
                              imgPath={article.imgPath}
                              heading={article.heading}
                              duration={article.duration}
                              linkPath={article.linkPath}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={1} />
        </Grid>
        <CustomHeight height="4rem" />
        <Divider sx={{ background: theme.palette.lines.main }}></Divider>
      </ClearContainer>
    </div>
  );
};

export default Community;
