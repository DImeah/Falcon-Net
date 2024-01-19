import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  reducers: {
    toggleTheme: (state) => {
      console.log("Current state:", state);
      const newState = !state;
      console.log("New state:", newState);
      return newState;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
