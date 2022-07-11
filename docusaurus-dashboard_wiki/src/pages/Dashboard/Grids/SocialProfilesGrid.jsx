import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Grid, Stack, Typography } from "@mui/material";
import { use100vh } from "react-div-100vh";
import ButtonLink from "../../../components/ButtonLink";

export default function ContainerGrid() {
  const { siteConfig } = useDocusaurusContext();
  const height_100vh = use100vh();
  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={"h6"} align="center">
          social Profiles
        </Typography>
        <ButtonLink
          to="https://www.carousell.com.hk/u/louiscklaw/"
          text={"carousel"}
        />

        <ButtonLink to="http://192.168.10.61:5000" text={"changedetection"} />
        <ButtonLink
          to="https://console.firebase.google.com/project/dashboard-76c7d/overview"
          text={"firebase console"}
        />
      </Stack>
    </Grid>
  );
}
