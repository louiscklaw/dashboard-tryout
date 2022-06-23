// https://data.etabus.gov.hk/datagovhk/kmb_eta_data_dictionary.pdf
// https://data.etabus.gov.hk/datagovhk/kmb_eta_api_specification.pdf

import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import moment from "moment";
import "moment/locale/zh-hk";

import _ from "lodash";
import { useEffect, useRef, useState } from "react";

// https://flatuicolors.com/palette/fr

moment().locale("zh-hk");

export default function BusCell({ stop_eta_data, route }) {
  let [bus_cell_data, setBusCellData] = useState();
  let bus_cell_ref = useRef();
  let [bus_cell_width, setBusCellWidth] = useState();

  useEffect(() => {
    if (stop_eta_data && route) {
      setBusCellData(stop_eta_data.filter((o) => o.route === route));
    }
  }, [stop_eta_data, route]);

  useEffect(() => {
    if (bus_cell_ref) setBusCellWidth(bus_cell_ref.current);
  }, [bus_cell_ref]);

  return (
    <>
      {bus_cell_data ? (
        <>
          <Box
            ref={bus_cell_ref}
            sx={{ padding: "2rem", backgroundColor: "tomato" }}
          >
            <Grid container spacing={1}>
              <Grid
                item
                xs={6}
                md={6}
                container
                flexDirection="column"
                alignItems="flex-start"
              >
                <Typography
                  variant={"h4"}
                  sx={{ fontSize: { xs: "2rem", md: "2rem" } }}
                >
                  {route}
                </Typography>

                <Stack direction={"row"} alignItems="baseline" spacing={1}>
                  <Typography variant={"h6"}>往</Typography>
                  <Typography
                    component="h3"
                    sx={{ fontSize: { xs: "1.4rem", md: "1.5rem" } }}
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
                xs={6}
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
                        sx={{ fontSize: { xs: "1.5rem", md: "1.3rem" } }}
                      >
                        {moment(bus_cell_data[0].eta).format("HH:mm")}
                      </Typography>
                      <Typography
                        variant={"h3"}
                        color="#1e3799"
                        sx={{ fontSize: { xs: "1.5rem", md: "1.3rem" } }}
                      >
                        {moment(bus_cell_data[0].eta).fromNow()}
                      </Typography>
                    </Stack>
                  </Grid>
                ) : (
                  <Typography
                    variant={"h3"}
                    color={"#f39c12"}
                    sx={{ fontSize: { xs: "1.5rem", md: "1.3rem" } }}
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
