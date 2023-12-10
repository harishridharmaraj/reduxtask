import { configureStore } from "@reduxjs/toolkit";
import productData from "../redux/proSlice";
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    products: productData,
    cart: cartReducer,
  },
});
