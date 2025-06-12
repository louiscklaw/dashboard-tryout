import React from 'react';
import { GetUptimeKumaBadgeLink } from '../utils/GetUptimeKumaBadgeLink';
import { ShowUptimeKumaBadge } from '../utils/ShowUptimeKumaBadge';

export const Cell1_7 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.7 (jobsdb-fetcher)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(80)}?label=jobsdb-desktop`}
        target_src={'http://192.168.10.21:6082/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(104)}?label=fetcher-db`}
        target_src={'http://192.168.10.21:8196/_/#/login/'}
      />
    </div>
  </>
);
