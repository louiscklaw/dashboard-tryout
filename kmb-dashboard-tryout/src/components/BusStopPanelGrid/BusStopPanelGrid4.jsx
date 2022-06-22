import _ from "lodash";
import React from "react";
import Helloworld from "../../apis/helloworld";
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  Paper,
  Stack,
  Container,
} from "@mui/material";
import { useParams, useRoutes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BusCell from "../BusCell";
import BusStopPanelContainer from "../BusStopPanelContainer";
import IconButtonWithLink from "../IconButtonWithLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;

const stop_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop/${stop_id}`;

export default function BusStopPanelGrid4() {
  let params = useParams();
  let { bus_stop_id1, bus_stop_id2, bus_stop_id3, bus_stop_id4 } = params;

  return (
    <>
      <Paper>
        <Grid container>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer
              bus_stop_id={bus_stop_id1}
              show_loading={true}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id2} />
          </Grid>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id3} />
          </Grid>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id4} />
          </Grid>
        </Grid>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid
              item
              xs={4}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-end"
                alignItems={"flex-end"}
              >
                <IconButtonWithLink
                  link="https://github.com/louiscklaw/dashboard-tryout/tree/master/kmb-dashboard-tryout"
                  icon={<FaGithub />}
                />
                <IconButtonWithLink
                  link="https://www.linkedin.com/in/louiscklaw"
                  icon={<FaLinkedin />}
                />
              </Stack>
            </Grid>
            <Grid item xs={4} container justifyContent="flex-end">
              <Typography variant="caption">last update: 2022-06-23</Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}
