import { createSlice } from "@reduxjs/toolkit";
import { ITrackItem } from "../../types/types";
import { fetchTracks, postTracks } from "./thunk";

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
    builder.addCase(postTracks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(postTracks.fulfilled, (state, action) => {
      const newData = [...state.tracks, action.payload]
      state.tracks = newData;
      state.isLoading = false;
    });
    builder.addCase(postTracks.rejected, ((state, action) => {
      state.isLoading = false;
      state.isError = !!action.payload;
    }));
  },
})

export default tracksSlice.reducer