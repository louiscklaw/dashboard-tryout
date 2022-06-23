import React, { useEffect, useState } from "react";
import { createContext } from "react";

const RouteListContext = createContext();

function RouteListContextProvider({ children }) {
  let [route_list, setRouteList] = useState();

  useEffect(() => {
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/route")
      .then((res) => res.json())
      .then((res_json) => setRouteList(res_json?.data));
  }, []);

  return (
    <RouteListContext.Provider value={{ hello: "world", route_list }}>
      {children}
    </RouteListContext.Provider>
  );
}
export { RouteListContext, RouteListContextProvider };
