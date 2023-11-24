import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsByType } from "../../api/adminApi";
import { toast } from "react-toastify";

const getProductsByCategory = createAsyncThunk(
  "auth/getProductsByCategory",
  async (category) => {
    try {
      const response = await getProductsByType(category);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return error.message;
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    products: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload !== "string") {
          state.products = payload;
        }
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.isLoading = false;
      }),
});

export { adminSlice, getProductsByCategory };
