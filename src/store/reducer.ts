import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";


export const reducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});