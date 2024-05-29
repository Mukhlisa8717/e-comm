import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
    let index = state.value.findIndex((el) => el.id === action.payload.id);
    if (index < 0) {
      state.value = [...state.value, { ...action.payload, quantity: 1 }];
      toast.success("Added to cart");
    } else {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      toast.error("Removed from cart");
    }
    localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incrementCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((product, i) =>
        index === i ? { ...product, quantity: product.quantity + 1 } : product,
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((product, i) =>
        index === i && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart(state, action) {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id,
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.warning("Cart deleted");
    },
    clearCart(state) {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  incrementCart,
  decrementCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
