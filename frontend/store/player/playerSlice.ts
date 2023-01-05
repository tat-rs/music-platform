import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrackItem, PlayerState } from "../../types/types";

const initialState: PlayerState = {
  active: null,
  volume: 25,
  duration: 0,
  currentTime: 0,
  isPaused: true,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state) => {
      state.isPaused = false;
    },
    pause: (state) => {
      state.isPaused = true;
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
      state.isPaused = true;
    },
  },
})

export const { play, pause, setCurrentTime, setVolume, setDuration, setActive } = playerSlice.actions

export default playerSlice.reducer