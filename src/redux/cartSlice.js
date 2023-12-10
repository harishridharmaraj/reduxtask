import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const checkCart = state.cart.find(
        (state) => state.id === action.payload.id
      );
      if (checkCart) {
        alert("Already added to Cart");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    delCart: (state, action) => {
      state.cart = state.cart.filter((state) => state.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});
export const selectCartItems = (state) => state.cart.cart;
export const { addtoCart, delCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
