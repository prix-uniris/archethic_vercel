import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ClearContainer from "../customComponents/ClearContainer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

import { IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";

import Image from "next/image";

const MyList = styled(List)(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

const CustomListItem = styled(ListItem)(({ theme }) => ({
  padding: `10px 20px`,
  margin: `0px 0px`,
  "&:hover": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ".MuiLink-root": {
      color: theme.palette.text.primary,
    },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: 2,
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  },
  "&:hover:after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}));

const CustomListItemLink = styled(Link)(({ theme }) => ({
  width: "max-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#607290",
  transition: "all 0.3s ease",
  textDecoration: "none"
}));

const NavLink = ({ text, to }) => {
  return (
    <CustomListItem disableGutters>
      <CustomListItemLink href={to}>{text}</CustomListItemLink>
    </CustomListItem>
  );
};

const navbarlink = [
  {
    text: "Ecosystem",
    to: "#ecosystem-landing",
  },
  {
    text: "Governance",
    to: "#governance-landing",
  },
  {
    text: "Universal Coin",
    to: "#uco-landing",
  },
  {
    text: "Developers",
    to: "#developers-landing",
  },
  {
    text: "Community",
    to: "#community-landing",
  },
  {
    text: "Roadmap",
    to: "#roadmap-landing",
  },
];

const Navbar = () => {
  const isLessThan1160Px = useMediaQuery("(max-width:1160px)");

  const theme = useTheme();

  const [isOpen, setOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "auto",
        width: "100%",
        background: scrollY === 0 ? "none" : theme.palette.background.default,
        zIndex: 2,
      }}
    >
      <ClearContainer maxWidth="lg">
        <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
          <Grid
            container
            style={{ padding: scrollY === 0 ? "1em 0em" : "0.5em 0em" }}
          >
            <Grid
              item
              xs={6}
              sm={3}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src="/assets/logo/archethic-white.png"
                height={scrollY === 0 ? "65" : "50"}
                width={scrollY === 0 ? "200" : "160"}
                onClick={() => {
                  window.location.href= "#"
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={9}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              {isLessThan1160Px ? (
                <IconButton onClick={() => setOpen(!isOpen)}>
                  <Fade in={!isOpen} sx={{ position: "absolute", right: 0 }}>
                    <Menu
                      style={{
                        fontSize: "3rem",
                        color: theme.palette.text.primary,
                      }}
                    />
                  </Fade>
                  <Fade in={isOpen} sx={{ position: "absolute", right: 0 }}>
                    <Close
                      style={{
                        fontSize: "3rem",
                        color: theme.palette.text.primary,
                      }}
                    />
                  </Fade>
                </IconButton>
              ) : (
                <MyList>
                  {navbarlink.map((nav, index) => {
                    return (
                      <NavLink key={nav.text} text={nav.text} to={nav.to} />
                    );
                  })}
                </MyList>
              )}
            </Grid>
          </Grid>
          <Collapse
            in={isOpen && isLessThan1160Px}
            sx={{ background: theme.palette.background.default, width: "100%" }}
          >
            <MyList sx={{ flexDirection: "column" }}>
              {navbarlink.map((nav, index) => {
                return <NavLink key={nav.text} text={nav.text} to={nav.to} />;
              })}
            </MyList>
          </Collapse>
        </Toolbar>
      </ClearContainer>
    </div>
  );
};

export default Navbar;
