import React from "react";

import { Collapse, Grid, Typography } from "@mui/material";

import ClearContainer from "../../customComponents/ClearContainer";
import { ClearResetContainer } from "../../customComponents/ClearContainer";

import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "../../../styles/home/features.module.css";
import CustomHeight from "../../customComponents/CustomHeight";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PrimaryButton from "../primaryButton";
import SecondaryButton from "../secondaryButton";
import AddIcon from "@mui/icons-material/Add";
import SubtractIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled, useTheme } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRight: `1px solid ${theme.palette.common.white}`,
    borderBottom: `1px solid ${theme.palette.common.white}`,
    "&:first-of-type": {
      borderTopLeftRadius: "10px",
    },
    "&:last-child": {
      borderRight: "none",
      borderTopRightRadius: "10px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: "light",
  },
  borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  "&:nth-of-type(odd)": {
    backgroundColor: "none",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#03162c",
  },
  th: {
    borderRight: `1px solid rgba(255, 255, 255, 0.1)`,
  },
  td: {
    borderLeft: `1px solid rgba(255, 255, 255, 0.1)`,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    borderLeft: `1px solid rgba(255, 255, 255, 0.1)`,
  },
  "&:last-child th": {
    "&:first-of-type": {
      borderBottomLeftRadius: "10px",
    },
  },
}));

const CustomCard = ({ imgPath, heading, clickHandler, children, btnText }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        alt={heading}
        height="140"
        image={imgPath}
        sx={{
          height: "100%",
          width: 100,
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {heading}
        </Typography>
        {children}
      </CardContent>
      {clickHandler && (
        <CardActions>
          <SecondaryButton size="small" onClick={clickHandler}>
            {btnText || "Learn More"}
          </SecondaryButton>
        </CardActions>
      )}
    </Card>
  );
};

// Table Data and Logic
const columns = [
  { field: "id", headerName: "", width: 150 },
  { field: "archethic", headerName: "ARCHEthic", width: 130 },
  { field: "bitcoin", headerName: "Bitcoin", width: 130 },
  {
    field: "ethereum1",
    headerName: "Ethereum 1.0",
    width: 130,
  },
  {
    field: "ethereum2",
    headerName: "Ethereum 2.0",
    width: 130,
  },
  {
    field: "eos",
    headerName: "EOS",
    width: 130,
  },
  {
    field: "tezos",
    headerName: "Tezos",
    width: 130,
  },
  {
    field: "harmony",
    headerName: "Harmony",
    width: 130,
  },
];

const rows = [
  {
    id: "Consensus",
    archethic: "ARCH",
    bitcoin: "POW",
    ethereum1: "POW",
    ethereum2: "POS",
    eos: "dPOS",
    tezos: "dBFT",
    harmony: "FBFT + POS",
  },
  {
    id: "Validation Time",
    archethic: "< 5 sec",
    bitcoin: "10 min",
    ethereum1: "15sec",
    ethereum2: "15sec",
    eos: "0.5sec",
    tezos: "1 min",
    harmony: "136 sec",
  },
  {
    id: "Tx/sec",
    archethic: "Unlimted",
    bitcoin: "7",
    ethereum1: "20",
    ethereum2: "15000",
    eos: "3996",
    tezos: "40",
    harmony: "10 Millions",
  },
  {
    id: "Security",
    archethic: "97.5%",
    bitcoin: "51%",
    ethereum1: "51%",
    ethereum2: "66%",
    eos: "66%",
    tezos: "66%",
    harmony: "66%",
  },
  {
    id: "Data Security",
    archethic: "Geo-Secured Sharding",
    bitcoin: "Everywhere",
    ethereum1: "Everywhere",
    ethereum2: "Sharding",
    eos: "Sharding",
    tezos: "Everywhere",
    harmony: "Sharding",
  },
  {
    id: "P2P Layer",
    archethic: "Supervised Multicase",
    bitcoin: "Gossip",
    ethereum1: "Gossip",
    ethereum2: "Gossip",
    eos: "Gossip",
    tezos: "Gossip",
    harmony: "Gossip",
  },
];

const Features = () => {
  const theme = useTheme();
  const isLessThan670Px = useMediaQuery("(max-width: 670px)");

  const [open, setOpen] = React.useState(false);
  const [curDisplay, setCurDisplay] = React.useState(0);

  const handleClick = (index) => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        if (index !== curDisplay) {
          setCurDisplay(index);
          setOpen(true);
        }
      }, 300);
    } else {
      setCurDisplay(index);
      setOpen(true);
    }
  };

  const getBtnText = (index) => {
    if (!open) {
      return <AddIcon />;
    }
    let result = 0;
    switch (index) {
      case 0:
        curDisplay !== 0 ? (result = 1) : (result = 0);
        break;
      case 1:
        curDisplay !== 1 ? (result = 1) : (result = 0);
        break;
      case 2:
        curDisplay !== 2 ? (result = 1) : (result = 0);
        break;
    }

    if (result === 0) {
      return <SubtractIcon />;
    } else {
      return <AddIcon />;
    }
  };

  const featuresElements = [
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        color="textSecondary"
        textAlign="center"
        gutterBottom
      >
        4 years of research and 12 strong international patents endow ArchEthic
        with the technological attributes that its predecessors have lacked -
        scalability, speed, reliability and simplicity of native biometric
        recognition. These patents will be given to the open source community to
        foster participation and hence accelerate the pace of innovation.
        Designed for mass adoption, ArchEthic relies on a new form of
        unbreakable validation consensus (ARCH), which is ultra-secure and
        allows an unlimited number of transactions.
      </Typography>
      <PrimaryButton text="Read YellowPaper" />
    </Grid>,
    <Grid
      sx={{
        display: "flex",
        flexDirection: isLessThan670Px ? "column" : "row",
        alignItems: isLessThan670Px ? "center" : "flex-start",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        sm={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CustomCard imgPath={"./assets/logo/Uniris.png"} heading={"DWeb"}>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            gutterBottom
            lineHeight="25px"
          >
            One app for website maintenance, security, handling and costing on
            the blockchain with a fraction of its cost !
          </Typography>
        </CustomCard>
      </Grid>
      <Grid item sm={4}>
        <CustomCard imgPath={"./assets/logo/Uniris.png"} heading={"DMail"}>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            gutterBottom
            lineHeight="25px"
          >
            Email Redefined! An all in one email, messaging, wallet and payments
            app that provides the full suite for a user.
          </Typography>
        </CustomCard>
      </Grid>
      <Grid item sm={4}>
        <CustomCard imgPath={"./assets/logo/Uniris.png"} heading={"D-NFT"}>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            gutterBottom
            lineHeight="25px"
          >
            NFTs Reimagined in collaboration with artists! <br />
            Coming Soon!
          </Typography>
        </CustomCard>
      </Grid>
    </Grid>,
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        color="textSecondary"
        textAlign="center"
        gutterBottom
      >
        Have you ever wondered how many times your identity is exploited without
        your knowledge by centralized monopolies like Google, Facebook or even
        your favourite merchant site? The world wants you to believe that
        ownership doesn’t matter. We are here to change that narrative. Identity
        is not just about ownership but control and freedom. As systems
        innovate, the desire for ownership and control will increase, because
        people will start to realize the possibilities with true ownership in
        the Web 3.0 era. Enter the era of innovation and decentralized identity
        that is your to own and control.
      </Typography>
    </Grid>,
  ];

  return (
    <div className={styles.root}>
      <div className={styles.overlay}></div>
      <ClearContainer>
        <Grid container>
          <div className={styles.mainText}>
            <CustomHeight height="8em" />
            <Typography
              variant={"h2"}
              component={"h2"}
              textAlign={"center"}
              gutterBottom
            >
              Pillars of ARCHEthic Blockchain Ecosystem
            </Typography>
            <Typography
              variant={"subtitle2"}
              textAlign={"center"}
              color="textSecondary"
              fontWeight="light"
            >
              The technical and functional pillars that make ARCHEthic unique
              and ready for global adoption.
            </Typography>
          </div>
        </Grid>
        <CustomHeight height="4rem" />
        <Grid
          container
          spacing={3}
          sx={{
            flexDirection: isLessThan670Px ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item sm={4} md={4} display="flex">
            <CustomCard
              imgPath={"./icons/Blocks.svg"}
              heading={"Network"}
              clickHandler={() => handleClick(0)}
              btnText={getBtnText(0)}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                gutterBottom
                lineHeight="25px"
              >
                Transactions outperforming the market standards! <br />{" "}
                Scalability &gt; 1 Million TPS <br /> Validation time 5 sec{" "}
                <br /> Security &gt; 90% maliciousness Sustainability ≈ 3.6
                Billion times Transaction fees ≈ 0.1%
              </Typography>
            </CustomCard>
          </Grid>
          <Grid item sm={4} md={4}>
            <CustomCard
              imgPath={"./icons/P2P.svg"}
              heading={"Applications"}
              clickHandler={() => handleClick(1)}
              btnText={getBtnText(1)}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                gutterBottom
                lineHeight="25px"
              >
                Our blockchain platform aims to replace and to improve all
                current applications with a comprehensive and open ecosystem,
                allowing people to move from the trust imposed by centralized to
                a decentralized system.
              </Typography>
            </CustomCard>
          </Grid>
          <Grid item sm={4} md={4}>
            <CustomCard
              imgPath={"./icons/Key.svg"}
              heading={"Identity"}
              clickHandler={() => handleClick(2)}
              btnText={getBtnText(2)}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                gutterBottom
                lineHeight="25px"
              >
                Your identity is your right. With ARCHEthic, you can access your
                identity but no one owns it. The security and threat issues that
                centralised systems pose helped us realise that ownership
                identity is needed now more than ever.
              </Typography>
            </CustomCard>
          </Grid>
        </Grid>
        <CustomHeight height="2rem" />
        <ClearContainer>
          <Collapse in={open}>{featuresElements[curDisplay]}</Collapse>
        </ClearContainer>
        <CustomHeight height="3rem" />
        <ClearContainer>
          <Typography
            variant="h5"
            compoenent="h5"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            How ARCHEthic scales upto other blockchains?
          </Typography>
          <CustomHeight height={"2rem"} />
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {columns.map((col) => {
                    return (
                      <StyledTableCell align="center" key={col.headerName}>
                        {col.headerName}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{ background: theme.palette.primary.main }}
                    >
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.archethic}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.bitcoin}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ethereum1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ethereum2}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.eos}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.tezos}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.harmony}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <CustomHeight height={"2rem"} />
        </ClearContainer>
        <Divider sx={{background: "rgba(255, 255, 255, 0.1)"}}></Divider>
      </ClearContainer>
    </div>
  );
};

export default Features;
