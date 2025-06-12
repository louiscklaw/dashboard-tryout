import React from 'react';
import { GetUptimeKumaBadgeLink } from './GetUptimeKumaBadgeLink';
import { ShowUptimeKumaBadge } from './ShowUptimeKumaBadge';

export function StatusByNumber({ idx, label }: { idx: number; label: string }): React.JSX.Element {
  return (
    <>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(idx)}?label=${label}`}
        target_src={`//${label}/`}
      />
    </>
  );
}
