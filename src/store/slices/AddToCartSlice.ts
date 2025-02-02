import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../types/types";

const initialState: CartState = {
  items: [],
};

const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push(action.payload);
        alert("Item added to the cart");
      } else {
        alert("Item is already in the cart");
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      alert("Cart cleared");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
