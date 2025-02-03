import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, Product } from "../../types/types.ts";
import AxiosIntance from "../../utils/AxiosIntance.ts";

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "product/fetchProducts",
  async () => {
    const response = await AxiosIntance.get<Product[]>("/");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
