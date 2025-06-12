import React from "react";
import { ShowUptimeKumaBadge } from "../utils/ShowUptimeKumaBadge";
import { GetUptimeKumaBadgeLink } from "../App";

export const Cell1_8 = (
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
