import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk('/basket/get', async () => {
  const res = await axios.get('http://localhost:5000/basket');
  return res.data;
});

export const postBasketThunk = createAsyncThunk('/basket/post', async (data) => {
  const res = await axios.post('http://localhost:5000/basket', data);
  return res.data;
});

export const deleteBasketThunk = createAsyncThunk('/basket/delete', async (id) => {
  await axios.delete(`http://localhost:5000/basket/${id}`);
  return id;
});

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(getBasketThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBasketThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getBasketThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Post
      .addCase(postBasketThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // Delete
      .addCase(deleteBasketThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(item => item._id !== action.payload);
      });
  }
});

export default basketSlice.reducer;
