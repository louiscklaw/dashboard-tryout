// http://localhost:3000/up_time_dashboard

import React from "react";
import {
  Typography,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Grid,
  Paper,
} from "@mui/material";
import Link from "@docusaurus/Link";
import { use100vh } from "react-div-100vh";

export default function Home() {
  const height_100vh = use100vh();

  return (
    <>
      <Paper>
        <Box sx={{ position: "absolute", bottom: "3vh", left: "3vh" }}>
          <Link to="/">
            <Typography variant="h5">Back</Typography>
          </Link>
        </Box>
        <iframe
          src="https://louiscklaw-bus-dashboard.web.app/bus_stops/41E81A921D79F375/C3201264CC8E5C5D/C1DAF9F8B637B776/6F58AF0D366EB8CA"
          target="_parent"
          height={height_100vh}
          width="100%"
        />
      </Paper>
    </>
  );
}
