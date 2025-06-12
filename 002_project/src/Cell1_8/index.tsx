import React from 'react';
import { GetUptimeKumaBadgeLink } from '../utils/GetUptimeKumaBadgeLink';
import { ShowUptimeKumaBadge } from '../utils/ShowUptimeKumaBadge';

export const Cell1_8 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.8 (automation)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(23)}?label=n8n_health_check`}
        target_src={'//n8n.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(22)}?label=n8n.louislabs.com`}
        target_src={'//n8n.louislabs.com/'}
      />
    </div>
  </>
);
