/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";

import regionSlice, { RegionState } from "./slices/region-slice";

export interface AppState {
    region: RegionState;
}

const store = configureStore<AppState>({
    reducer: {
        region: regionSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;

export default store;
