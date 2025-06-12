import React from "react";

export function ShowUptimeKumaBadge({
  imgsrc,
  target_src,
}: {
  imgsrc: string;
  target_src?: string;
}) {
  if (target_src) {
    return (
      <div>
        <a href={target_src} target="_blank" rel="noreferrer">
          <img src={imgsrc} />
        </a>
      </div>
    );
  }
  return (
    <div>
      <img src={imgsrc} />
    </div>
  );
}
