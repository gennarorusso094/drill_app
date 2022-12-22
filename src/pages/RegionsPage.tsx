import React, { useCallback, useEffect } from "react";

import { REGIONS_URL } from "../CONSTANTS";

export const RegionsPage: React.FC = () => {
  const fetchRegions = useCallback(async () => {
    try {
      const response = await fetch(REGIONS_URL);

      if (!response.ok) {
        throw new Error("Error occurred when fetching regions!");
      }

      const data = await response.json();

      console.log(data.results);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, [fetchRegions]);

  return null;
};
