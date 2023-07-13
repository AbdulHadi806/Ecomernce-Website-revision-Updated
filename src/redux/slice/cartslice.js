import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    ProductId: 0,
    CartItems: []
  },
  reducers: {
    addToCartIDHandler: (state, action) => {
      const isItem = state.CartItems.find(ci => ci.id === action.payload.id);
      if (isItem) {
        state.CartItems = state.CartItems.map(item => {
          if (item.id === action.payload.id && item.count < 5) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      } else {
        state.CartItems = [...state.CartItems, { ...action.payload, count: 1 }];
      }
    },
   RemoveFromCartIDHandler: (state, action) => {
    const isItem = state.CartItems.find((ci) => ci.id === action.payload.id);
      if (isItem && isItem.count > 1) {
        state.CartItems = state.CartItems.map((item) => {
          if (item.id === action.payload.id && item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      } else {
        state.CartItems = state.CartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    }
  }
})

export const { addToCartIDHandler, RemoveFromCartIDHandler } = cartSlice.actions;
export default cartSlice.reducer;