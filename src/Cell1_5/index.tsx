import React from "react";
import { ShowUptimeKumaBadge } from "../ShowUptimeKumaBadge";
import { GetUptimeKumaBadgeLink } from "../App";

export const Cell1_5 = (
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
