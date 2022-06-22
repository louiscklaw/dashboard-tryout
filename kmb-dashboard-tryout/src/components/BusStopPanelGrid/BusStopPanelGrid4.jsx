import _ from "lodash";
import React from "react";
import Helloworld from "../../apis/helloworld";
import { Box, Grid, Typography, CircularProgress, Paper } from "@mui/material";
import { useParams, useRoutes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BusCell from "../BusCell";
import BusStopPanelContainer from "../BusStopPanelContainer";

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
      </Paper>
    </>
  );
}
