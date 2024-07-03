import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import { loadState, saveState } from "../utils/localstorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
  });
});
