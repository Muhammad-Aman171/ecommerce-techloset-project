import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface FilterState {
  filteredProducts: Product[];
  selectedCategories: string[];
}

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

// Selector for filtered products
export const selectFilteredProducts = (state: RootState) =>
  state.filterSlice.filteredProducts;

export default filterSlice.reducer;
