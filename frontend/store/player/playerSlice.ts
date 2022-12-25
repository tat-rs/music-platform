import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { ITrackItem, PlayerState } from "../../types/types";

const initialState: PlayerState = {
  active: null,
  volume: 0,
  duration: 0,
  currentTime: 0,
  pause: true,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state) => {
      state.pause = false;
    },
    pause: (state) => {
      state.pause = true;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setActive: (state, action: PayloadAction<ITrackItem>) => {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
})

export const { play, pause, setCurrentTime, setVolume, setDuration, setActive } = playerSlice.actions

export default playerSlice.reducer