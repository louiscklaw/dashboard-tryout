import React from "react";
import ThirdPartyLib from "../contexts/ThirdPartyLib";
import { BusStopContextProvider } from "./StopList/BusStop";
import { RouteListContextProvider } from "./StopList/RouteList";
import { RouteStopListContextProvider } from "./StopList/RouteStopList";

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
