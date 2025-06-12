import React from "react";
import { ShowUptimeKumaBadge } from "../ShowUptimeKumaBadge";
import { ShowHealthCheckBadge } from "../App";

export const Cell2_2 = (
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

function GetUptimeKumaBadgeLink(status_idx: number) {
  return `//status.iamon99.com/api/badge/${status_idx.toString()}/status`;
}
