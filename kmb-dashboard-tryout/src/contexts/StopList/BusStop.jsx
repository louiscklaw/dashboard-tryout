import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const BusStopContext = createContext();

function BusStopContextProvider({ children }) {
  let [stop_list, setStopList] = useState();

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop").then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    setStopList(data?.data);
  }, [data]);

  return (
    <BusStopContext.Provider
      value={{ hello: "world", isLoading, error, stop_list }}
    >
      {children}
    </BusStopContext.Provider>
  );
}
export { BusStopContext, BusStopContextProvider };
