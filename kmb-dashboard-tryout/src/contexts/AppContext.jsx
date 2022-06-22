import React from "react";
import ThirdPartyLib from "../contexts/ThirdPartyLib";
import { BusStopContextProvider } from "../components/StopList/BusStop";
import { RouteListContextProvider } from "../components/StopList/RouteList";
import { RouteStopListContextProvider } from "../components/StopList/RouteStopList";

export default ({ children }) => {
  return (
    <>
      <ThirdPartyLib>
        <BusStopContextProvider>
          <RouteListContextProvider>
            <RouteStopListContextProvider>
              {children}
            </RouteStopListContextProvider>
          </RouteListContextProvider>
        </BusStopContextProvider>
      </ThirdPartyLib>
    </>
  );
};
