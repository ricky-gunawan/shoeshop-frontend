import { createSlice } from "@reduxjs/toolkit";

const initialState: CartItems = [];

const customerCartSlice = createSlice({
  name: "customerCart",
  initialState,
  reducers: {
    setCartData: (_, action: { payload: CartItems }) => action.payload,
    increaseItemQty: (state, action: { payload: string }) => {
      state.forEach((item, index) => {
        if (item.product === action.payload) {
          state[index].quantity += 1;
        }
      });
    },
    decreaseItemQty: (state, action: { payload: string }) => {
      state.forEach((item, index) => {
        if (item.product === action.payload) {
          item.quantity > 1 && (state[index].quantity -= 1);
        }
      });
    },
    deleteCartItem: (state, action: { payload: string }) => {
      state.forEach((item, index) => {
        if (item.product === action.payload) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const { setCartData, increaseItemQty, decreaseItemQty, deleteCartItem } = customerCartSlice.actions;

const customerCartReducer = customerCartSlice.reducer;
export default customerCartReducer;
