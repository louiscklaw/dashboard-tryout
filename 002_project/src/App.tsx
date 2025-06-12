import React from "react";
import "./App.css";

import { Cell1_1 } from "./Cell1_1";
import { Cell1_2 } from "./Cell1_2";
import { Cell1_3 } from "./Cell1_3";
import { Cell1_4 } from "./Cell1_4";
import { Cell1_5 } from "./Cell1_5";
import { Cell1_6 } from "./Cell1_6";
import { Cell1_7 } from "./Cell1_7";
import { Cell1_8 } from "./Cell1_8";
//
import { Cell2_1 } from "./Cell2_1";
import { Cell2_2 } from "./Cell2_2";
import { Cell2_3 } from "./Cell2_3";
import { Cell2_4 } from "./Cell2_4";
//

export function ShowHealthCheckBadge({
  imgsrc,
  target_src,
}: {
  imgsrc: string;
  target_src?: string;
}) {
  if (target_src) {
    return (
      <div>
        <a href={target_src} target="_blank" rel="noreferrer">
          <img src={imgsrc} alt="Health check status badge" />
        </a>
      </div>
    );
  }
  return (
    <div>
      <img src={imgsrc} alt="Health check status badge" />
    </div>
  );
}

export function GetUptimeKumaBadgeLink(status_idx: number) {
  return `//status.iamon99.com/api/badge/${status_idx.toString()}/status`;
}

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>All status table</h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {Cell1_1}
        {Cell1_2}
        {Cell1_3}
        {Cell1_4}
        {Cell1_5}
        {Cell1_6}
        {Cell1_7}
        {Cell1_8}
        {Cell2_1}
        {Cell2_2}
        <Cell2_3 />
        <Cell2_4 />
      </div>
      <div style={{ marginTop: "5rem", marginBottom: "10rem" }}>end</div>
    </div>
  );
}

export default App;
