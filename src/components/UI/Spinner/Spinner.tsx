import React from "react";

import styles from "./Spinner.module.scss";

export const Spinner: React.FC = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles.spinner} />
    </div>
  );
};
