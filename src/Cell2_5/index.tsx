import React from "react";
import { StatusByNumber } from "../StatusByNumber";

import style from "./style.module.scss";

export const Cell2_5 = (
  <div className={style.cell}>
    <div className="cell_title">cell2.4 (hksingleparty-demo)</div>
    <StatusByNumber idx={111} label={"https://pa_admin.louislabs.com"} />
    <StatusByNumber idx={112} label={"https://pa_mobile.louislabs.com"} />
    <StatusByNumber idx={113} label={"https://pa_backend.louislabs.com"} />
  </div>
);
