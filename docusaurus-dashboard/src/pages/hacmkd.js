// http://localhost:3000/up_time_dashboard

import React from "react";
import {
  Typography,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Grid,
} from "@mui/material";
import Link from "@docusaurus/Link";
import { use100vh } from "react-div-100vh";

export default function Home() {
  const height_100vh = use100vh();

  return (
    <>
      <Box sx={{ position: "absolute", bottom: "3vh", left: "3vh" }}>
        <Link to="/">
          <Typography variant="h5">Back</Typography>
        </Link>
      </Box>
      <iframe
        src="https://hackmd.io/eE8aAV3sRJyr3OULNoeVKw"
        target="_parent"
        height={height_100vh}
        width="100%"
      />
    </>
  );
}
