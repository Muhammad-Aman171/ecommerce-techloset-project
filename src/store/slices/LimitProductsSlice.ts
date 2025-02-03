import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Products, ProductState } from "../../types/types";
import AxiosIntance from "../../utils/AxiosIntance.ts";

export const fetchProductInLimits = createAsyncThunk(
  "product/fetchProductInLimits",
  async () => {
    const response = await AxiosIntance.get("?limit=6");
    return response.data;
  }
);

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

const fetchProductInLimitsSlice = createSlice({
  name: "limitProducts",
  initialState,
  reducers: {
    setLimitProducts: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductInLimits.pending, (state) => {
        state.status = "idle";
      })
      .addCase(
        fetchProductInLimits.fulfilled,
        (state, action: PayloadAction<Products[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProductInLimits.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setLimitProducts } = fetchProductInLimitsSlice.actions;
export default fetchProductInLimitsSlice.reducer;
