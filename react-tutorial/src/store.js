import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './tabSlice'; // path-ah correct-ah mathiyachu

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
  },
});