import _ from "lodash";
import React from "react";
import Helloworld from "../../apis/helloworld";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { useParams, useRoutes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BusCell from "../BusCell";
import BusStopPanelContainer from "../BusStopPanelContainer";

const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;

const stop_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop/${stop_id}`;

export default function BusStopPanel() {
  let params = useParams();
  let { bus_stop_id } = params;

  return (
    <>
      <BusStopPanelContainer bus_stop_id={bus_stop_id} />
    </>
  );
}
