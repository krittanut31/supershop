import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [], // { name, price, type, reviews, bg, id, quantity }
    total: 0,
  },
  reducers: {
    addItem: (state, { payload: { item } }) => {
      let itemList = state.item
      let duplicatedElement = itemList.find(p => p.id === item.id)
      if (duplicatedElement) {
        duplicatedElement.quantity += 1
        let dupIndex = itemList.findIndex(p => p.id === item.id)
        itemList[dupIndex] = duplicatedElement
      } else {
        itemList.push(item)
      }
      state.item = itemList
    },
    removeItem: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
