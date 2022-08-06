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
          containers
        </Typography>
        <ButtonLink to="http://192.168.10.21:9000/" text={"nuc portainer"} />
        <ButtonLink to="http://192.168.10.61:9000/" text={"m73 portainer"} />
        <ButtonLink to="http://192.168.10.61:5050" text={"pgadmin"} />
        <ButtonLink to="http://192.168.10.61:8095" text={"teedy file sharing"} />
        <ButtonLink to="http://192.168.10.61:9001" text={"questdb"} />
        <ButtonLink to="http://192.168.10.61:8081" text={"phpmyadmin"} />
        <ButtonLink to="https://drone.iamon99.com/" text={"drone ci"} />
        <ButtonLink to="http://192.168.10.61:8087" text={"jenkins"} />
        <ButtonLink to="http://192.168.10.61:8086" text={"influxdb"} />
        <ButtonLink to="http://192.168.10.61:8086" text={"appwrite"} />
        <ButtonLink to="http://192.168.10.61:8093" text={"RethinkDb 8093"} />

        <ButtonLink to="https://calendar.google.com/calendar/u/0/r?pli=1" text={"google calendar"} />
      </Stack>
    </Grid>
  );
}
