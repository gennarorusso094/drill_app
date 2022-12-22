/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Region } from "../../models";

export interface RegionState {
    currentRegion: Region | null;
}

const regionInitialState: RegionState = {
    currentRegion: null,
};

const regionSlice = createSlice({
    name: "region",
    initialState: regionInitialState,
    reducers: {
        setCurrentRegion(state, action: PayloadAction<Region | null>) {
            const currentRegion = action.payload;
            state.currentRegion = currentRegion;
        },
    },
});

export const regionsActions = regionSlice.actions;

export default regionSlice;
