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
      <Grid container sx={{ height: height_100vh }}>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/1a-1-sau-mau-ping-(central)-star-ferry/4"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/13x-1-po-tat-tsim-sha-tsui-east/8"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/13m-1-kwun-tong-(elegance-road)-po-tat-(circular)/7"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/93a-1-po-lam-kwun-tong-ferry/11"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/1a-1-star-ferry-sau-mau-ping-(central)/28"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/13x-1-tsim-sha-tsui-east-po-tat/24"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/13m-1-kwun-tong-(elegance-road)-po-tat-(circular)/20"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={3} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="https://hkbus.app/zh/route/93a-1-kwun-tong-ferry-po-lam/5"
            height={height_100vh}
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
}
