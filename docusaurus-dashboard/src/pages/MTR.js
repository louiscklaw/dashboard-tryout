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
            src="https://hkbus.app/zh/route/1a-1-sau-mau-ping-(central)-star-ferry/4"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          <iframe
            src="https://hktrain.dubdub.pro/mtr-status"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          <iframe
            src="https://hktrain.dubdub.pro/lrt"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          <iframe
            src="https://hktrain.dubdub.pro/mtr/l/s"
            height={height_100vh}
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
}
