import React from 'react';
import { StatusByNumber } from '../utils/StatusByNumber';
import styles from './style.module.scss';

function Cell2_3(): React.JSX.Element {
  return (
    <div className={styles.cell}>
      <div>cell2.3 (lettersoup-demo)</div>
      <div className={styles.cellContent}>
        <StatusByNumber idx={41} label="lettersoup-demo.louislabs.com" />
      </div>
    </div>
  );
}

export { Cell2_3 };
