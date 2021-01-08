import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    switchIsDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { switchIsDarkTheme } = themeSlice.actions;
export const selectIsDarkTheme = (state) => state.theme.isDarkTheme;

export default themeSlice.reducer;
