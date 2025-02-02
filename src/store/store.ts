// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductsSlice.ts";
import limitProductsReducer from "./slices/LimitProductsSlice.ts";
import filterSliceReducer from "./slices/FilterCategoriesSlice.ts";
import addToCartReducer from "./slices/AddToCartSlice.ts";

export const store = configureStore({
  reducer: {
    productSlice: productReducer,
    limitProductSlice: limitProductsReducer,
    filterSlice: filterSliceReducer,
    addToCartSlice: addToCartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
