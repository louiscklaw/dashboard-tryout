import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cell1_7 } from "./Cell1_7";
import { Cell1_8 } from "./Cell1_8";
import { Cell2_1 } from "./Cell2_1";
import { Cell2_2 } from "./Cell2_2";
import { Cell2_3 } from "./Cell2_3";
import { Cell2_4 } from "./Cell2_4";
import { Cell2_5 } from "./Cell2_5";
import { ShowUptimeKumaBadge } from "./ShowUptimeKumaBadge";
import { Cell1_6 } from "./Cell1_6";
import { Cell1_4 } from "./Cell1_4";
import { Cell1_5 } from "./Cell1_5";
import { Cell1_3 } from "./Cell1_3";

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
          <img src={imgsrc} />
        </a>
      </div>
    );
  }
  return (
    <div>
      <img src={imgsrc} />
    </div>
  );
}

export function GetUptimeKumaBadgeLink(status_idx: number) {
  return `//status.iamon99.com/api/badge/${status_idx.toString()}/status`;
}

function GetHealthCheckBadgeLink(status_idx: string) {
  return `//status.iamon99.com/api/badge/${status_idx}/status`;
}

const Cell1_1 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.1 (portfolio)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(106)}?label=portfolio.louislabs.com`}
        target_src={"//portfolio.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(
          106
        )}?label=portfolio.louislabs.com/pay`}
        target_src={"//portfolio.louislabs.com/pay"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(
          106
        )}?label=portfolio.louislabs.com/beg-comment`}
        target_src={"//portfolio.louislabs.com/beg-comment"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=aboutme.louislabs.com`}
        target_src={"//aboutme.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(89)}?label=aboutme.louislabs.com/pay`}
        target_src={"//aboutme.louislabs.com/pay/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(96)}?label=fs.louislabs.com`}
        target_src={"//fs.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(95)}?label=git.louislabs.com`}
        target_src={"//git.louislabs.com/"}
      />{" "}
    </div>
  </>
);

const Cell1_2 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.2 (monitor)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(10)}?label=healthcheck.louislabs.com`}
        target_src={"//healthcheck.louislabs.com/"}
      />{" "}
    </div>
  </>
);

export function StatusByNumber({
  idx,
  label,
}: {
  idx: number;
  label: string;
}): React.JSX.Element {
  return (
    <>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(idx)}?label=${label}`}
        target_src={"//n8n.louislabs.com/"}
      />
    </>
  );
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
        {Cell2_3}
        {Cell2_4}
      </div>
      <div style={{ marginTop: "5rem", marginBottom: "10rem" }}>end</div>
    </div>
  );
}

export default App;
