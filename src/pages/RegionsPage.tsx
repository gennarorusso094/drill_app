import React, { useCallback, useEffect } from "react";

import { Region } from "../models";
import { REGIONS_URL } from "../CONSTANTS";
import { getRandomIndex } from "../utils";

export const RegionsPage: React.FC = () => {
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

      console.log(region.name); // TODO: remove this console log in next tasks

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, []);

  return null;
};
