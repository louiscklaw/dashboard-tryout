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
      <Grid container sx={{ height: height_100vh, overflowY: "hidden" }}>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          <iframe
            src="http://www.hkww.org/weather/chinese/index_main.html"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          <iframe
            src="https://www.weather.org.hk/"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          <iframe
            src="https://www.metwarn.com/"
            height={height_100vh}
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
}
