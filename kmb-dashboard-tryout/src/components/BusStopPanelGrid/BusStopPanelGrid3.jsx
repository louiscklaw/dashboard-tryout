import { Grid, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import BusStopPanelContainer from "../BusStopPanelContainer";

const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;

const stop_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop/${stop_id}`;

export default function BusStopPanelGrid3() {
  let params = useParams();
  let { bus_stop_id1, bus_stop_id2, bus_stop_id3 } = params;

  return (
    <>
      <Paper>
        <Grid container>
          <Grid item xs={4}>
            <BusStopPanelContainer
              bus_stop_id={bus_stop_id1}
              show_loading={true}
            />
          </Grid>
          <Grid item xs={4}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id2} />
          </Grid>
          <Grid item xs={4}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id3} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
