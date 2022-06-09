import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { use100vh } from "react-div-100vh";
import { Stack, Button, Grid, Typography } from "@mui/material";
import ButtonLink from "../components/ButtonLink";

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
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            <ButtonLink
              to="https://www.carousell.com.hk/u/louiscklaw/"
              text={"carousel"}
            />

            <ButtonLink
              to="http://192.168.10.61:5000"
              text={"changedetection"}
            />
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            <ButtonLink
              to="http://192.168.10.61:50102/dashboard"
              text={"uptime kuma"}
            />

            <ButtonLink to="http://192.168.10.61:9000" text={"portainer"} />

            <ButtonLink
              to="http://192.168.10.61:8080/dashboard/"
              text={"traefik dashboard"}
            />

            <ButtonLink to="https://drone.iamon99.com/" text={"drone ci"} />

            <ButtonLink
              to="https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM/edit#gid=0"
              text={"port schedule"}
            />

            <ButtonLink to="http://localhost:8082/" text={"luigi dashboard"} />
            <ButtonLink
              to="https://console.firebase.google.com/u/0/project/fir-tryout-f4e7a/overview"
              text={"firebase console"}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            <ButtonLink
              to="https://console.firebase.google.com/u/0/project/fir-tryout-f4e7a/overview"
              text={"firebase console"}
            />
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
}
