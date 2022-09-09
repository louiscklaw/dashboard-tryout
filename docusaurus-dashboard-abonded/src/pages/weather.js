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
import { useState } from "react";

import { JsonToTable } from "react-json-to-table";
import { useEffect } from "react";
const myJson = {
  Student: { name: "Jack", email: "jack@xyz.com" },
  "Student id": 888,
  Sponsors: [
    { name: "john", email: "john@@xyz.com" },
    { name: "jane", email: "jane@@xyz.com" },
  ],
};

export default function Home() {
  const height_100vh = use100vh();
  const [hko_weather, setHkoWeather] = useState();

  useEffect(() => {
    fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en"
    )
      .then((res) => res.json())
      .then((res_json) => setHkoWeather(res_json))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Box sx={{ position: "absolute", bottom: "3vh", left: "3vh" }}>
        <Link to="/">
          <Typography variant="h5">Back</Typography>
        </Link>
      </Box>
      <Grid container sx={{ height: height_100vh }}>
        <Grid item xs={4} sx={{ width: "100%", height: height_100vh / 2 }}>
          {hko_weather ? (
            <JsonToTable json={hko_weather} />
          ) : (
            <>
              <Typography variant="h6">loading</Typography>
            </>
          )}
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
