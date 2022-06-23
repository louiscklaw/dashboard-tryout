import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const RouteListContext = createContext();

function RouteListContextProvider({ children }) {
  let [route_list, setRouteList] = useState();

  const { isLoading, error, data } = useQuery("route", () =>
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/route").then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    setRouteList(data?.data);
  }, [data]);

  return (
    <RouteListContext.Provider
      value={{ hello: "world", isLoading, error, route_list }}
    >
      {children}
    </RouteListContext.Provider>
  );
}
export { RouteListContext, RouteListContextProvider };
