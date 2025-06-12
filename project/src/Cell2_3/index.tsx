import React from "react";
import { ShowUptimeKumaBadge } from "../ShowUptimeKumaBadge";

export const Cell2_3 = (
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

function GetUptimeKumaBadgeLink(status_idx: number) {
  return `//status.iamon99.com/api/badge/${status_idx.toString()}/status`;
}
