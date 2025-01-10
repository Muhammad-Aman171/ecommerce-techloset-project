import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  key?: any;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.key === action.payload.key
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.key !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
