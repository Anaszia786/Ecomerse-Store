import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: "idle",
    products: [],
    cart: [],
  },
  reducers: {
    usersLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    usersReceived(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        if (state.products.length === 0) {
          state.products = action.payload;
        }
      }
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    addProd(state, action) {
      state.products.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      console.log("removeFromCart -> action.payload", action.payload);
    },
  },
});

export const {
  usersLoading,
  usersReceived,
  addToCart,
  addProd,
  removeFromCart,
} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  dispatch(usersLoading());
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch(usersReceived(response.data));
};

export const addProduct = (newProduct) => async (dispatch) => {
  dispatch(usersLoading());
  try {
    const res = await axios.post(
      "https://fakestoreapi.com/products",
      newProduct
    );
    dispatch(addProd(res.data));
  } catch (err) {
    console.log("error", err);
  }
};
