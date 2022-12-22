import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { AppState } from "../../store";
import { SPECIES_IN_REGION } from "../../CONSTANTS";

export const SpeciesPage: React.FC = () => {
  const currentRegion = useSelector((state: AppState) => state.region.currentRegion);

  useEffect(() => {
    const fetchSpecies = async (speciesUri: string) => {
      const data = await fetch(speciesUri);
      const result = await data.blob();
      const resultBlob = result;
      return resultBlob;
    };

    if (!currentRegion) return;

    const URL = SPECIES_IN_REGION[0] + currentRegion.identifier + SPECIES_IN_REGION[1];
    const resultBlob = fetchSpecies(URL);

    resultBlob.then((b: Blob) => {
      const fr = new FileReader();

      fr.onload = function () {
        const data = JSON.parse(this.result as string);

        console.log(data.result); //TODO: remove this console log  in next tasks
      };

      fr.readAsText(b);
    });
  }, [currentRegion]);

  return <div>Hello species page!: current Region is {currentRegion?.name}</div>;
};
