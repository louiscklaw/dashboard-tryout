import React from "react";
import { ShowUptimeKumaBadge } from "../utils/ShowUptimeKumaBadge";
import { GetUptimeKumaBadgeLink } from "../App";

export const Cell1_4 = (
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
