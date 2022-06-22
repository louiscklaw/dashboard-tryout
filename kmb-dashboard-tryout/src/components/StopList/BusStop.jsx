import React, { useEffect, useState } from "react";
import { createContext } from "react";

const BusStopContext = createContext();

function BusStopContextProvider({ children }) {
  let [stop_list, setStopList] = useState();

  useEffect(() => {
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop")
      .then((res) => res.json())
      .then((res_json) => setStopList(res_json?.data));
  }, []);

  return (
    <BusStopContext.Provider value={{ hello: "world", stop_list }}>
      {children}
    </BusStopContext.Provider>
  );
}
export { BusStopContext, BusStopContextProvider };
