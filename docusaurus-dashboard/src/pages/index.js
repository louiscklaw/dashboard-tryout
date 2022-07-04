import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Grid, Stack, Typography } from "@mui/material";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { use100vh } from "react-div-100vh";
import styles from "./index.module.css";

import DashboardGrid from "./Dashboard/Grids/DashboardGrid";
import ContainerGrid from "./Dashboard/Grids/ContainerGrid";
import SocialProfilesGrid from "./Dashboard/Grids/SocialProfilesGrid";
import ToolsGrid from "./Dashboard/Grids/ToolsGrid";
import NotesGrid from "./Dashboard/Grids/NotesGrid";

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
        <NotesGrid />
      </Grid>
    </Layout>
  );
}
