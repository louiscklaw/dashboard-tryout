import React from 'react';
import { GetUptimeKumaBadgeLink } from '../App';
import { ShowUptimeKumaBadge } from '../utils/ShowUptimeKumaBadge';

export const Cell1_1 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.1 (portfolio)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(106)}?label=portfolio.louislabs.com`}
        target_src={'//portfolio.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(106)}?label=portfolio.louislabs.com/pay`}
        target_src={'//portfolio.louislabs.com/pay'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(106)}?label=portfolio.louislabs.com/beg-comment`}
        target_src={'//portfolio.louislabs.com/beg-comment'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=aboutme.louislabs.com`}
        target_src={'//aboutme.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(89)}?label=aboutme.louislabs.com/pay`}
        target_src={'//aboutme.louislabs.com/pay/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(96)}?label=fs.louislabs.com`}
        target_src={'//fs.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(95)}?label=git.louislabs.com`}
        target_src={'//git.louislabs.com/'}
      />
    </div>
  </>
);
