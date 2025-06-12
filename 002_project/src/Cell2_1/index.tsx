import React from 'react';
import { GetUptimeKumaBadgeLink } from '../utils/GetUptimeKumaBadgeLink';
import { ShowUptimeKumaBadge } from '../utils/ShowUptimeKumaBadge';
import styles from './style.module.scss';

export const Cell2_1 = (
  <>
    <div className={styles.cell}>
      <div className={styles.cell_title}>cell2.1 (shop.louislabs.com)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(97)}?label=shop.louislabs.com`}
        target_src={'//shop.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=changedetect`}
        target_src={'//shop.louislabs.com/'}
      />
    </div>
  </>
);
