import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

import ClearContainer from "../src/customComponents/ClearContainer";

import Divider from "@mui/material/Divider";

// Sections Imports

import Landing from "../src/components/home/landing";
import Features from "../src/components/home/features";
import Governance from "../src/components/home/governance";
import UniversalCoin from "../src/components/home/universalCoin";
import Developers from "../src/components/home/developers";
import Community from "../src/components/home/community";

export default function Index() {
  return (
    <div sx={{ padding: "0px" }}>
      <Landing />
      <Features />
      <Governance />
      <UniversalCoin />
      <Developers />
      <Community />
      <script defer type="text/javascript" src="/js/rubic.js"></script>
    </div>
  );
}
