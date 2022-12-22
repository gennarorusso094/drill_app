import React from "react";

import styles from "./LayoutContainer.module.scss";

export interface LayoutContainerProps {
  children: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return <div className={styles["layout-wrapper"]}>{children}</div>;
};
