import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import playerReducer from "./player/playerSlice";
import tracksReducer from "./tracks/tracksSlice";

const combinedReducer: any = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
  
export const wrapper = createWrapper<AppStore>(makeStore);