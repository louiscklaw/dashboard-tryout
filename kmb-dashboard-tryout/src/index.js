import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusStopPanel from "./components/BusStopPanel";
import BusStopPanelGrid from "./components/BusStopPanelGrid";
import BusStopPanelGrid3 from "./components/BusStopPanelGrid/BusStopPanelGrid3";
import BusStopPanelGrid4 from "./components/BusStopPanelGrid/BusStopPanelGrid4";

import AppContext from "./contexts/AppContext";

import UserGetLink from "./pages/UserGetLink";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/:bus_stop_id" element={<BusStopPanel />} />
          <Route
            path="/bus_stops/:bus_stop_id1/:bus_stop_id2"
            element={<BusStopPanelGrid />}
          />
          <Route
            path="/bus_stops/:bus_stop_id1/:bus_stop_id2/:bus_stop_id3"
            element={<BusStopPanelGrid3 />}
          />
          <Route
            path="/bus_stops/:bus_stop_id1/:bus_stop_id2/:bus_stop_id3/:bus_stop_id4"
            element={<BusStopPanelGrid4 />}
          />
          <Route path="/" element={<UserGetLink />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="teams" element={<Teams />}> */}

            {/* <Route path="new" element={<NewTeamForm />} /> */}
            {/* <Route index element={<LeagueStandings />} /> */}
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
