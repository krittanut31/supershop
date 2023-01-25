import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [], // { name, price, type, reviews, bg, id, quantity }
    total: 0,
  },
  reducers: {
    addItem: (state, { payload: { item } }) => {
      console.log(state.item.includes(item));
      state.item = [...state.item, item];
      console.log(state.item);
      console.log(item.id);

      if (state.item) {
        for (let i = 0; i < state.item.length; i++) {
          if (item.id === state.item[i].id) {
            state.item[i].quantity = item.quantity;
          }
        }
      } else {
        state.item = [...state.item, item];
      }
    },
    removeItem: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
