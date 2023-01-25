import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import shoseReducer from "./shoseSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shose: shoseReducer,
    cart: cartReducer,
  },
});
