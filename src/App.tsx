import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cell2_4 } from "./Cell2_4";
import { Cell2_5 } from "./Cell2_5";

function ShowUptimeKumaBadge({
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

function ShowHealthCheckBadge({
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

function GetUptimeKumaBadgeLink(status_idx: number) {
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

const Cell1_3 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.3 (changedetect)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(5)}?label=private`}
        target_src={"http://192.168.10.21:5001/"}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(5)}?label=upsangel`}
        target_src={"http://192.168.10.21:5008/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=carousell.louislabs.com`}
        target_src={"http://192.168.10.21:5003/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(24)}?label=jobsdb`}
        target_src={"http://192.168.10.21:5002/"}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=apple-refurbished`}
        target_src={"http://192.168.10.21:5009/"}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=threads`}
        target_src={"http://192.168.10.21:5010/"}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=debug`}
        target_src={"http://192.168.10.21:5015/"}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=misc`}
        target_src={"http://192.168.10.21:5016/"}
      />
    </div>
  </>
);

const Cell1_4 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.4 (REST/functions)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=api.louislabs.com`}
        target_src={"//api.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=event.louislabs.com`}
        target_src={"//event.louislabs.com/"}
      />
    </div>
  </>
);

const Cell1_5 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.5 (DB)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(105)}?label=nocodb.louislabs.com`}
        target_src={"//nocodb.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(100)}?label=bb.louislabs.com`}
        target_src={"//bb.louislabs.com/"}
      />
    </div>
  </>
);

const Cell1_6 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.6 (carousell)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=fetcher`}
        target_src={"//api.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=fetcher-db`}
        target_src={"//api.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(101)}?label=carousell-exercise-1`}
        target_src={"http://192.168.10.21:6099/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`https://healthcheck.iamon99.com/b/2/f1d68974-3186-4d58-907a-a54d99f5bda0.svg`}
        target_src={"http://192.168.10.21:6099/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(102)}?label=carousell-exercise-2`}
        target_src={"http://192.168.10.21:6070/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`https://healthcheck.iamon99.com/b/2/bd9fb3a6-05f7-4d38-bca6-e321196aabf8.svg`}
        target_src={"http://192.168.10.21:6070/"}
      />
    </div>
  </>
);

const Cell1_7 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.7 (jobsdb-fetcher)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(80)}?label=jobsdb-desktop`}
        target_src={"http://192.168.10.21:6082/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(104)}?label=fetcher-db`}
        target_src={"http://192.168.10.21:8196/_/#/login/"}
      />
    </div>
  </>
);

const Cell1_8 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.8 (automation)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(23)}?label=n8n_health_check`}
        target_src={"//n8n.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(22)}?label=n8n.louislabs.com`}
        target_src={"//n8n.louislabs.com/"}
      />
    </div>
  </>
);

const Cell2_1 = (
  <>
    <div className="cell">
      <div className="cell_title">cell2.1 (shop.louislabs.com)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(97)}?label=shop.louislabs.com`}
        target_src={"//shop.louislabs.com/"}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=changedetect`}
        target_src={"//shop.louislabs.com/"}
      />
    </div>
  </>
);

const Cell2_2 = (
  <>
    <div className="cell">
      <div className="cell_title">cell2.2 (n8n)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=n8n.iamon99.com`}
        target_src={"//n8n.iamon99.com/"}
      />
      <ShowHealthCheckBadge
        imgsrc={`https://healthcheck.iamon99.com/b/2/bb1602a5-33c3-4d06-86e3-08860cc152a5.svg`}
        target_src={"//n8n.iamon99.com/"}
      />
    </div>
  </>
);

const Cell2_3 = (
  <>
    <div className="cell">
      <div className="cell_title">cell2.3 (lettersoup-demo)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=n8n.louislabs.com`}
        target_src={"//n8n.louislabs.com/"}
      />
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
