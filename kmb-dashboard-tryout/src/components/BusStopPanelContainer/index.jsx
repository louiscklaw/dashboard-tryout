import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import BusCellThin from "../BusCellThin";

const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;

const stop_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop/${stop_id}`;

export default function BusStopPanelContainer({
  bus_stop_id,
  show_loading = false,
}) {
  let [is_loading, setIsLoading] = useState(true);
  let [uniq_route, setUniqRoute] = useState([]);
  let [stop_eta_data, setStopEtaData] = useState();
  let [stop_info, setStopInfo] = useState();
  let [thin_mode, setThinMode] = useState(false);
  let bus_cell_ref = useRef();
  let [bus_cell_width, setBusCellWidth] = useState();

  let default_refresh_interval = 30 * 1000;
  let [show_countdown, setShowCountdown] = useState();

  const update_bus_stop_info = () => {
    fetch(stop_eta_link(bus_stop_id))
      .then((res) => res.json())
      .then((res_json) => {
        let { data: stop_eta_link_data } = res_json;
        setUniqRoute(_.uniqBy(stop_eta_link_data, "route").map((o) => o.route));
        setStopEtaData(stop_eta_link_data);
        console.log({ stop_eta_link_data });
      });

    fetch(stop_link(bus_stop_id))
      .then((res) => res.json())
      .then((res_json) => {
        let { data } = res_json;
        setStopInfo(data);
      });
  };

  useEffect(() => {
    let countdown = default_refresh_interval;
    let countdown_timer = setInterval(() => {
      countdown = countdown - 1000;
      // console.log({ countdown });

      if (countdown <= 0) {
        countdown = default_refresh_interval;
        update_bus_stop_info();
      }

      setShowCountdown(countdown);
    }, 1000);

    return () => clearInterval(countdown_timer);
  }, []);

  useEffect(() => {
    Promise.all([
      fetch(stop_eta_link(bus_stop_id))
        .then((res) => res.json())
        .then((res_json) => {
          let { data: stop_eta_link_data } = res_json;
          setUniqRoute(
            _.uniqBy(stop_eta_link_data, "route").map((o) => o.route)
          );
          setStopEtaData(stop_eta_link_data);
          console.log({ stop_eta_link_data });
        }),
      fetch(stop_link(bus_stop_id))
        .then((res) => res.json())
        .then((res_json) => {
          let { data } = res_json;
          setStopInfo(data);
        }),
    ]).then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setBusCellWidth(bus_cell_ref?.current?.clientWidth);
    if (bus_cell_ref?.current?.clientWidth) {
      // adopt 6 columns
      if (bus_cell_ref?.current?.clientWidth < 400) {
        setThinMode(true);
      } else {
        setThinMode(false);
      }
    }
  }, [bus_cell_ref?.current?.clientWidth]);

  if (is_loading) return <>loading</>;

  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        {show_loading ? (
          <>
            <Box sx={{ position: "fixed", top: "1rem", right: "1rem" }}>
              <CircularProgress
                variant="determinate"
                value={(show_countdown / default_refresh_interval) * 100}
              />

              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {show_countdown > 1000
                    ? `${Math.round(show_countdown / 1000)}s`
                    : "Refreshing..."}
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>

      <Box
        ref={bus_cell_ref}
        sx={{
          paddingLeft: { xs: "0rem", md: thin_mode ? "1rem" : "2rem" },
          paddingTop: { xs: "1rem", md: "0rem" },
          paddingBottom: { xs: "1rem", md: "0rem" },
          backgroundColor: { xs: "#f0f0f0", md: "unset" },
        }}
      >
        <Typography
          sx={{
            fontSize: thin_mode ? "1.5rem" : "2rem",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          站名:{stop_info.name_tc}
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        sx={{ backgroundColor: "#fdfdfd", borderRadius: "1rem" }}
      >
        {uniq_route.length > 0 ? (
          <>
            {uniq_route.map((route, idx) => (
              <Grid item xs={12} key={idx}>
                <BusCellThin stop_eta_data={stop_eta_data} route={route} />
              </Grid>
            ))}
          </>
        ) : (
          <>loading</>
        )}
      </Grid>
    </>
  );
}
