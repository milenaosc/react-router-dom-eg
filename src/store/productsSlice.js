import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    singleProduct: {},
    // cart: { items: [], totalPrice: 0 },
    totalPrice: 0,
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.totalPrice = 0;
      state.allProducts = action.payload;
    },
    getSingleProduct: (state, action) => {
      state.singleProduct = action.payload.data;
      state.totalPrice = 0;
    },
  },
});

export const { getAllProducts, getSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;
