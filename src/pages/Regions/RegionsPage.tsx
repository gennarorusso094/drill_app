import React, { useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import { Region } from "../../models";
import { AppDispatch } from "../../store";
import { regionsActions } from "../../store/slices/region-slice";

import { REGIONS_URL } from "../../CONSTANTS";
import { getRandomIndex } from "../../utils";

export const RegionsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchRegions = useCallback(async () => {
    try {
      const response = await fetch(REGIONS_URL);

      if (!response.ok) {
        throw new Error("Error occurred when fetching regions!");
      }

      const data = await response.json();

      const regions: Region[] = data.results.map((regionData: Region) => {
        return {
          name: regionData.name,
          identifier: regionData.identifier,
        };
      });

      const region = regions[getRandomIndex(regions.length)];

      dispatch(regionsActions.setCurrentRegion(region));
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, []);

  return null;
};
