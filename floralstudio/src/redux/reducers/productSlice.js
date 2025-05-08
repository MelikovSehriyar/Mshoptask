import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk('/products/get', async () => {
  const res = await axios.get('http://localhost:5000/products');
  return res.data;
});

export const postProductsThunk = createAsyncThunk('/products/post', async (data) => {
  const res = await axios.post('http://localhost:5000/products', data);
  return res.data;
});

export const deleteProductThunk = createAsyncThunk('/products/delete', async (id) => {
  await axios.delete(`http://localhost:5000/products/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Post
      .addCase(postProductsThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // Delete
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(item => item._id !== action.payload);
      });
  }
});

export default productSlice.reducer;
