import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import screencapture_png from "../assets/screencapture.png";

import {
  Stack,
  IconButton,
  Link,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Joyride from "react-joyride";

import GrabBusLink from "../components/GrabBusLink";

let tour_processed_ls_key = "welcome_tour";

function IconButtonWithLink({ link, icon }) {
  return (
    <>
      <IconButton aria-label="delete" size="small" href={link}>
        {icon}{" "}
      </IconButton>
    </>
  );
}

export default IconButtonWithLink;
