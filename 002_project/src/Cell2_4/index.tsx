import React from "react";
import { StatusByNumber } from "../utils/StatusByNumber";

import style from "./style.module.scss";

function Cell2_4() {
  return (
    <div className={style.cell}>
      <div className="cell_title">cell2.4 (hksingleparty-demo)</div>
      <div className={style.cellContent}>
        <StatusByNumber idx={111} label={"pa_admin.louislabs.com"} />
        <StatusByNumber idx={112} label={"pa_mobile.louislabs.com"} />
        <StatusByNumber idx={113} label={"pa_backend.louislabs.com"} />
      </div>
    </div>
  );
}

export { Cell2_4 };
