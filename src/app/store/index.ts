import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../../entities/product/models/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
