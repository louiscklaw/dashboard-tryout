import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Grid, Stack, Typography } from "@mui/material";
import { use100vh } from "react-div-100vh";
import ButtonLink from "../../../components/ButtonLink";

export default function DashboardGrid() {
  const { siteConfig } = useDocusaurusContext();
  const height_100vh = use100vh();
  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={"h6"} align="center">
          Dashboards
        </Typography>

        <ButtonLink to="http://192.168.10.61:8089" text={"checkmk"} />
        <ButtonLink to="http://192.168.10.61:8086" text={"influxdb"} />

        <ButtonLink
          to="http://192.168.10.61:50102/dashboard"
          text={"uptime kuma"}
        />

        <ButtonLink
          to="http://192.168.10.61:8080/dashboard/"
          text={"traefik dashboard"}
        />

        <ButtonLink to="https://drone.iamon99.com/" text={"drone ci"} />

        <ButtonLink to="http://192.168.10.61:8087" text={"jenkins"} />

        <ButtonLink
          to="https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM/edit#gid=0"
          text={"port schedule"}
        />

        <ButtonLink to="http://192.168.10.61:50080/" text={"Homer dashboard"} />

        <ButtonLink to="http://localhost:8082/" text={"luigi dashboard"} />
      </Stack>
    </Grid>
  );
}
