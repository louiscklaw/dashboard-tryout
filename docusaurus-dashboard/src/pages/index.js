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
import ContainerGrid from "./Dashboard/Grids/ContainerGrid";
import SocialProfilesGrid from "./Dashboard/Grids/SocialProfilesGrid";

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
        <SocialProfilesGrid />
        <DashboardGrid />

        <ContainerGrid />
        <ToolsGrid />
      </Grid>
    </Layout>
  );
}
