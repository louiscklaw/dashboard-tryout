// http://localhost:3000/up_time_dashboard

import React from "react";
import { Link, Button, createTheme, ThemeProvider, Grid } from "@mui/material";
import { use100vh } from "react-div-100vh";

export default function Home() {
  const height_100vh = use100vh();

  return (
    <>
      <Grid container>
        <Grid item xs={6} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="http://192.168.10.61:50102/dashboard"
            target="_parent"
            height={height_100vh}
            width="100%"
          />
        </Grid>
        <Grid item xs={6} sx={{ width: "100%", height: height_100vh }}>
          <iframe
            src="http://192.168.10.61:50080/"
            height={height_100vh}
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
}
