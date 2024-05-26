import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: JSON.parse(localStorage.getItem("likes")) || [],
  },
  reducers: {
    toggleWishlist(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
        toast.success("Added to favourites");
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
        toast.error("Removed from favourites");
      }
      localStorage.setItem("likes", JSON.stringify(state.value));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
