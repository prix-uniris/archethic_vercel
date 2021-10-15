import React from "react";

import styles from "../../styles/socialMedia.module.css";

import {
  Twitter,
  Instagram,
  Telegram,
  YouTube,
  GitHub,
  Mic,
} from "@mui/icons-material";

const socialMediaLinks = [
  {
    name: "Github",
    url: "https://github.com/archethic-foundation",
    icon: <GitHub style={{ color: "#fff" }} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/archethic",
    icon: <Twitter style={{ color: "#fff" }} />,
  },
  {
    name: "Telegram",
    url: "https://t.me/ArchEthic_ENG",
    icon: <Telegram style={{ color: "#fff" }} />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCmP7Sg_TdBfbO1_u4EyIKzg",
    icon: <YouTube style={{ color: "#fff" }} />,
  },
  {
    name: "Podcase",
    url: "https://anchor.fm/uniris",
    icon: <Mic style={{ color: "#fff" }} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/the_official_archethic/",
    icon: <Instagram style={{ color: "#fff" }} />,
  },
];

const SocialMedia = ({ orientation }) => {
  return (
    <div
      className={styles.root}
      style={{ flexDirection: orientation || "row" }}
    >
      {socialMediaLinks.map((link) => {
        return (
          <a className={styles.socialMediaLink} key={link.name} href={link.url}>
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
