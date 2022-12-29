import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import playerReducer from "./player/playerSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      player: playerReducer
    }
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
  
export const wrapper = createWrapper<AppStore>(makeStore);
