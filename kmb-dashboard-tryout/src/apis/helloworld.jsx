import { Box } from "@mui/material";
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
const eta_link = (stop_id, route, service_type) =>
  "https://data.etabus.gov.hk/v1/transport/kmb/eta/{stop_id}/{route}/{service_type}";
const stop_eta_link = (stop_id) =>
  `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${stop_id}`;
const route_eta_link =
  "https://data.etabus.gov.hk/v1/transport/kmb/route-eta/{route}/{service_type}";

const test_config = { route: "1A", bound: "O" };

export default function Helloworld() {
  let [res_json, setResJson] = useState(null);
  let [test_route, setTestRoute] = useState();
  let [route_number, setRouteNumber] = useState();
  let [route_dest, setRouteDest] = useState();
  let [route_orig, setRouteOrig] = useState();
  let [route_list_json, setRouteListJson] = useState();
  let [stop_list_json, setStopListJson] = useState();
  let [bus_stop_list_json, setBusStopListJson] = useState();
  let [is_loading, setIsLoading] = useState(true);
  let [found_bus_stop, setFoundBusStop] = useState();

  useEffect(() => {
    route_list_json?.data.filter(
      (o) => o.route == test_config.route && o.bound == test_config.bound
    );
  }, [route_list_json]);

  useEffect(() => {
    if (!is_loading && bus_stop_list_json.data && stop_list_json.data) {
      let { data: stop_list_data } = stop_list_json;
      let { data: bus_stop_list_data } = bus_stop_list_json;

      let { stop } = bus_stop_list_data[4];
      // console.log({ stop_list_json });

      setFoundBusStop(stop_list_data.filter((o) => o.stop == stop)[0]);
    }
  }, [is_loading]);

  useEffect(() => {
    Promise.all([
      // 1 fetch whole list
      fetch(route_list_link)
        .then((res) => res.json())
        .then((res_json) => setRouteListJson(res_json)),

      // 2 fetch stop list
      fetch(stop_list_link)
        .then((res) => res.json())
        .then((res_json) => {
          console.log(stop_list_json);
          setStopListJson(res_json);
        }),

      // 3 bus stop list
      fetch(route_stop_link("1A", "outbound", "1"))
        .then((res) => res.json())
        .then((res_json) => {
          console.log(res_json);
          setBusStopListJson(res_json);
        }),

      // 3 bus stop list
      fetch(stop_eta_link("41E81A921D79F375"))
        .then((res) => res.json())
        .then((res_json) => {
          console.log({ stop_eta_link: res_json });
        }),
    ]).then(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Box>helloworld</Box>
      {JSON.stringify(found_bus_stop)}
      {/* {JSON.stringify({ stop_list_json })} */}
      {/* {JSON.stringify(res_json)} */}
    </>
  );
}
