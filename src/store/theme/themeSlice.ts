import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeKeyType, ThemeState } from "./types";




const initialState: ThemeState = {
  theme: 'light',
}
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    ChangeTheme: (state, action: PayloadAction<ThemeKeyType>) => {
      state.theme = action.payload;
    }
  }
})

export const { ChangeTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;