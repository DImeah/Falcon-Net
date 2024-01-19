import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import userReducer from "./authSlice";

export const store = configureStore({
  reducer: { themeKey: themeSliceReducer, user: userReducer },
});
