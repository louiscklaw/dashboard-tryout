// https://data.etabus.gov.hk/datagovhk/kmb_eta_data_dictionary.pdf
// https://data.etabus.gov.hk/datagovhk/kmb_eta_api_specification.pdf

import { Box, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import moment from "moment";
import "moment/locale/zh-hk";

import Helloworld from "../../apis/helloworld";

import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";

const route_list_link = "https://data.etabus.gov.hk/v1/transport/kmb/route/";
const route_link =
  "https://data.etabus.gov.hk/v1/transport/kmb/route/{route}/{direction}/{service_type}";
const stop_list_link = "https://data.etabus.gov.hk/v1/transport/kmb/stop";
const stop_link = "https://data.etabus.gov.hk/v1/transport/kmb/stop/{stop_id}";
const route_stop_list_link =
  "https://data.etabus.gov.hk/v1/transport/kmb/route-stop";
const route_stop_link = (route, direction, service_type) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/route-stop/${route}/${direction}/${service_type}`;
const eta_link =
  "https://data.etabus.gov.hk/v1/transport/kmb/eta/{stop_id}/{route}/{service_type}";
const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;
const route_eta_link =
  "https://data.etabus.gov.hk/v1/transport/kmb/route-eta/{route}/{service_type}";

// https://flatuicolors.com/palette/fr

moment().locale("zh-hk");

export default function BusCell({ stop_eta_data, route }) {
  let [bus_cell_data, setBusCellData] = useState();

  useEffect(() => {
    if (stop_eta_data && route) {
      setBusCellData(stop_eta_data.filter((o) => o.route === route));
    }
  }, [stop_eta_data, route]);

  return (
    <>
      {bus_cell_data ? (
        <>
          <Box sx={{ padding: "2rem" }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={6}
                container
                flexDirection="column"
                alignItems="flex-start"
              >
                <Box>
                  <Typography
                    variant={"h4"}
                    sx={{ fontSize: { xs: "2rem", md: "2rem" } }}
                  >
                    {route}
                  </Typography>
                </Box>

                <Stack direction={"row"} alignItems="baseline" spacing={1}>
                  <Typography variant={"h6"}>往</Typography>
                  <Typography
                    component="h3"
                    sx={{ fontSize: { xs: "2rem", md: "1.5rem" } }}
                  >
                    {bus_cell_data[0].dest_tc}
                  </Typography>
                </Stack>
                <Typography
                  variant={"h6"}
                  color={"#7f8fa6"}
                  sx={{ fontSize: { xs: "1rem", md: "1rem" } }}
                >
                  {bus_cell_data[0].dest_en}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                container
                flexDirection="column"
                justifyContent="flex-start"
                alignItems={"flex-end"}
              >
                {bus_cell_data[0].eta ? (
                  <Grid item container justifyContent="flex-end">
                    <Stack spacing={1} direction="row">
                      <Typography
                        variant={"h3"}
                        color="#1e3799"
                        sx={{ fontSize: { xs: "2rem", md: "1.3rem" } }}
                      >
                        {moment(bus_cell_data[0].eta).format("HH:mm")}
                      </Typography>
                      <Typography
                        variant={"h3"}
                        color="#1e3799"
                        sx={{ fontSize: { xs: "2rem", md: "1.3rem" } }}
                      >
                        {moment(bus_cell_data[0].eta).fromNow()}
                      </Typography>
                    </Stack>
                  </Grid>
                ) : (
                  <Typography
                    variant={"h3"}
                    color={"#f39c12"}
                    sx={{ fontSize: { xs: "2rem", md: "1.3rem" } }}
                  >
                    未有班次資料
                  </Typography>
                )}

                <Grid
                  item
                  container
                  flexDirection={"column"}
                  justifyContent={"flex-end"}
                  alignItems="flex-end"
                >
                  {_.slice(bus_cell_data, 1, 3).map((o, i) => {
                    return o.eta ? (
                      <>
                        <Stack direction="row" spacing={1} key={i}>
                          <Typography
                            color={"#aaaaaa"}
                            sx={{ fontSize: { xs: "1.3rem", md: "1.1rem" } }}
                          >
                            {moment(o.eta).format("HH:mm")}
                          </Typography>
                          <Typography
                            color={"#aaaaaa"}
                            sx={{ fontSize: { xs: "1.3rem", md: "1.1rem" } }}
                          >
                            {moment(o.eta).fromNow()}
                          </Typography>
                        </Stack>
                      </>
                    ) : (
                      <></>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>loading</>
      )}
    </>
  );
}
