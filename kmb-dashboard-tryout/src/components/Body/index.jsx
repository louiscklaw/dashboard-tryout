import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Helloworld from "../../apis/helloworld";

import BusCell from "../BusCell";

import _ from "lodash";

// https://flatuicolors.com/palette/fr

const found_bus_stop = {
  route_number: "1A",
  direction: "O",
  bus_dest_tc: "荔枝公園",
  bus_orig_tc: "穝港",
  bus_eta: 3 * 3600,
};

const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;

export default function Body({ bus_stop }) {
  let [is_loading, setIsLoading] = useState(true);
  let [bus_stop_info, setBusStopInfo] = useState();

  useEffect(() => {
    console.log({ bus_stop });
  }, [bus_stop]);

  return (
    <>
      <Helloworld />

      <Grid
        container
        spacing={1}
        sx={{ backgroundColor: "#fdfdfd", borderRadius: "1rem" }}
      >
        <Grid item xs={12} lg={3}>
          {/* <BusCell bus_stop_info={bus_stop_info} route={"13M"} /> */}
        </Grid>
        <Grid item xs={12} lg={3}>
          {/* <BusCell bus_stop_info={bus_stop_info} route={"1A"} /> */}
        </Grid>
        <Grid item xs={12} lg={3}>
          {/* <BusCell /> */}
        </Grid>
        <Grid item xs={12} lg={3}>
          {/* <BusCell /> */}
        </Grid>
        <Grid item xs={12} lg={3}>
          {/* <BusCell /> */}
        </Grid>
      </Grid>
    </>
  );
}
