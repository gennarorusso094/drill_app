import React from "react";

import LayoutContainer from "./containers";
import RegionsPage from "./pages/Regions";
import SpeciesPage from "./pages/Species";

function App() {
  return (
    <LayoutContainer>
      <RegionsPage />
      <SpeciesPage />
    </LayoutContainer>
  );
}

export default App;
