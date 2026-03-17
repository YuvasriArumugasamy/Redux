// src/tabSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tabs',
  initialState: {
    activeTab: 'Home',
    isExplored: false // Default-ah false-ah irukkum
  },
  reducers: {
    changeTab: (state, action) => {
      state.activeTab = action.payload;
      state.isExplored = false; // Tab maaruna, explore mode off aaganum
    },
    setExplore: (state, action) => {
      state.isExplored = action.payload; // Explore mode-ah on/off panna
    }
  }
});

export const { changeTab, setExplore } = tabSlice.actions;
export default tabSlice.reducer;