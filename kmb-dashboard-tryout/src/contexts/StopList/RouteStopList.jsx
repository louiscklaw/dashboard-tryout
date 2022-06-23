import React, { useEffect, useState } from "react";
import { createContext } from "react";

const RouteStopListContext = createContext();

function RouteStopListContextProvider({ children }) {
  let [route_stop_list, setRouteStopList] = useState();

  useEffect(() => {
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/route-stop")
      .then((res) => res.json())
      .then((res_json) => setRouteStopList(res_json?.data));
  }, []);

  return (
    <RouteStopListContext.Provider value={{ hello: "world", route_stop_list }}>
      {children}
    </RouteStopListContext.Provider>
  );
}
export { RouteStopListContext, RouteStopListContextProvider };
