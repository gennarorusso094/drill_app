import React from "react";

import { useSelector } from "react-redux";

import { AppState } from "../../store";

export const SpeciesPage: React.FC = () => {
  const currentRegionName = useSelector((state: AppState) => state.region.currentRegion?.name);

  return <div>Hello species page!: current regions is {currentRegionName}</div>;
};
