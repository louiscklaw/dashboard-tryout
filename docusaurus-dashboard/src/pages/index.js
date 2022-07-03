import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Grid, Stack, Typography } from "@mui/material";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { use100vh } from "react-div-100vh";
import styles from "./index.module.css";

import ButtonLink from "../components/ButtonLink";

import DashboardGrid from "./Dashboard/Grids/DashboardGrid";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const height_100vh = use100vh();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          m={2}
        >
          <Link to="http://aboutme.louislabs.com">
            <Typography variant={"h4"}>louis portfolio</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack direction="column" spacing={1}>
            <Typography variant={"h6"} align="center">
              social Profiles
            </Typography>
            <ButtonLink
              to="https://www.carousell.com.hk/u/louiscklaw/"
              text={"carousel"}
            />

            <ButtonLink
              to="http://192.168.10.61:5000"
              text={"changedetection"}
            />
            <ButtonLink
              to="https://console.firebase.google.com/project/dashboard-76c7d/overview"
              text={"firebase console"}
            />
          </Stack>
        </Grid>
        <DashboardGrid />

        {/* <Grid item xs={12} md={2}>
          <Stack direction="column" spacing={1}>
            <Typography variant={"h6"} align="center">
              dashboards
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

            <ButtonLink
              to="http://192.168.10.61:50080/"
              text={"Homer dashboard"}
            />

            <ButtonLink to="http://localhost:8082/" text={"luigi dashboard"} />
          </Stack>
        </Grid> */}
        <Grid item xs={12} md={2}>
          <Stack direction="column" spacing={1}>
            <Typography variant={"h6"} align="center">
              containers
            </Typography>
            <ButtonLink
              to="http://192.168.10.21:9000/"
              text={"nuc portainer"}
            />
            <ButtonLink
              to="http://192.168.10.61:9000/"
              text={"m73 portainer"}
            />
            <ButtonLink to="http://192.168.10.61:5050" text={"pgadmin"} />{" "}
            <ButtonLink to="http://192.168.10.61:8081" text={"phpmyadmin"} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={2}>
          <Stack direction="column" spacing={1}>
            <Typography variant={"h6"} align="center">
              tools
            </Typography>
            <ButtonLink
              to="https://colorhunt.co/palettes/retro"
              text={"colorhunt"}
            />
            <ButtonLink to="https://flatuicolors.com/" text={"flatuicolors"} />
            <ButtonLink
              to="https://github.com/webkul/coolhue"
              text={"coolhue"}
            />
            <ButtonLink to="https://colors.dopely.top/" text={"dopely"} />
            <ButtonLink to="https://www.gradientos.app/" text={"gradientos"} />
            <ButtonLink
              to="https://brandpalettes.com/"
              text={"brandpalettes"}
            />
            <ButtonLink to="http://brandcolors.net/" text={"brandcolors"} />
            <ButtonLink to="https://material.colorion.co/" text={"colorion"} />
            <ButtonLink
              to="https://github.com/bradtraversy/design-resources-for-developers/"
              text={"design-resources-for-developers"}
            />
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
}
