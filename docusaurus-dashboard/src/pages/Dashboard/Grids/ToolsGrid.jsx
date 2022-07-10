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
          tools
        </Typography>
        <ButtonLink to="http://192.168.10.61:5010" text={"proxy pool 5010"} />
        <pre>curl --proxy 127.0.0.1:5566 https://api.my-ip.io/ip</pre>
        <ButtonLink
          to="http://192.168.10.61:4445/haproxy?stats"
          text={"tor proxy 4445"}
        />
        <ButtonLink to="http://192.168.10.61:8096" text={"mitm proxy 8096"} />
        <ButtonLink to="http://192.168.10.21:6080" text={"android emu 6080"} />
        <ButtonLink to="http://192.168.10.21:6081" text={"android emu 6081"} />
        <ButtonLink to="http://192.168.10.21:6082" text={"android emu 6082"} />
        <ButtonLink
          to="https://colorhunt.co/palettes/retro"
          text={"colorhunt"}
        />
        <ButtonLink to="https://flatuicolors.com/" text={"flatuicolors"} />
        <ButtonLink to="https://github.com/webkul/coolhue" text={"coolhue"} />
        <ButtonLink to="https://colors.dopely.top/" text={"dopely"} />
        <ButtonLink to="https://www.gradientos.app/" text={"gradientos"} />
        <ButtonLink to="https://brandpalettes.com/" text={"brandpalettes"} />
        <ButtonLink to="http://brandcolors.net/" text={"brandcolors"} />
        <ButtonLink to="https://material.colorion.co/" text={"colorion"} />
        {/* 	docker-rotating-proxy */}
        <ButtonLink
          to="https://github.com/bradtraversy/design-resources-for-developers/"
          text={"design-resources-for-developers"}
        />
      </Stack>
    </Grid>
  );
}
