import React from 'react';
import { GetUptimeKumaBadgeLink } from '../utils/GetUptimeKumaBadgeLink';
import { ShowUptimeKumaBadge } from '../utils/ShowUptimeKumaBadge';

export const Cell1_3 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.3 (changedetect)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(5)}?label=private`}
        target_src={'http://192.168.10.21:5001/'}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(5)}?label=upsangel`}
        target_src={'http://192.168.10.21:5008/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=carousell.louislabs.com`}
        target_src={'http://192.168.10.21:5003/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(24)}?label=jobsdb`}
        target_src={'http://192.168.10.21:5002/'}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=apple-refurbished`}
        target_src={'http://192.168.10.21:5009/'}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=threads`}
        target_src={'http://192.168.10.21:5010/'}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=debug`}
        target_src={'http://192.168.10.21:5015/'}
      />

      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=misc`}
        target_src={'http://192.168.10.21:5016/'}
      />
    </div>
  </>
);
