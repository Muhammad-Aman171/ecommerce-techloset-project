import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product, FilterState } from "../../types/types";

const initialState: FilterState = {
  filteredProducts: [],
  selectedCategories: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByCategory: (
      state,
      action: PayloadAction<{ category: string; products: Product[] }>
    ) => {
      const { category, products } = action.payload;
      state.filteredProducts =
        category === "all"
          ? products
          : products.filter((product) => product.category === category);
    },
  },
});

export const { filterByCategory } = filterSlice.actions;

export const selectFilteredProducts = (state: RootState) =>
  state.filterSlice.filteredProducts;

export default filterSlice.reducer;
