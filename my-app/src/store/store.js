import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/index";
export const store = configureStore({
  reducer:{
    data:dataSlice
  }
})