import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    singleProduct: {},
    totalPrice: null,
    singleProductClicked: false,
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    getSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
      console.log(state.singleProduct);
      state.singleProductClicked = false;
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
