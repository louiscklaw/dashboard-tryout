import React from "react";
import { ShowUptimeKumaBadge } from "../ShowUptimeKumaBadge";
import { GetUptimeKumaBadgeLink } from "../App";

export const Cell1_6 = (
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
