import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const RouteStopListContext = createContext();

function RouteStopListContextProvider({ children }) {
  let [route_stop_list, setRouteStopList] = useState();

  const { isLoading, error, data } = useQuery("route-stop", () =>
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/route-stop").then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    setRouteStopList(data?.data);
  }, [data]);

  return (
    <RouteStopListContext.Provider
      value={{ hello: "world", isLoading, error, route_stop_list }}
    >
      {children}
    </RouteStopListContext.Provider>
  );
}
export { RouteStopListContext, RouteStopListContextProvider };
