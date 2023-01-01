import { createSlice } from "@reduxjs/toolkit";
import { ITrackItem } from "../../types/types";
import fetchTracks from "./thunk";

interface tracksState {
  tracks: ITrackItem[],
  isError: boolean,
  isLoading: boolean
}

const initialState: tracksState = {
  tracks: [],
  isError: false,
  isLoading: false,
}

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.isLoading = true;
      state.tracks = [];
      state.isError = false;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTracks.rejected, ((state, action) => {
      state.isLoading = false;
      state.tracks = [];
      state.isError = !!action.payload;
    }));
  },
})

export default tracksSlice.reducer