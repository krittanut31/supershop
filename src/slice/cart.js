import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [], // { name, price, type, reviews, bg, id, quantity }
    quantityAll: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, { payload: { item, quantityAll, total } }) => {
      let qt = state.quantityAll;
      let itemList = state.item;
      let duplicatedElement = itemList.find((p) => p.id === item.id);
      if (duplicatedElement) {
        duplicatedElement.quantity += 1;
        let dupIndex = itemList.findIndex((p) => p.id === item.id);
        itemList[dupIndex] = duplicatedElement;
        qt += 1;
      } else {
        itemList.push(item);
        qt += 1;
      }
      state.quantityAll = qt;
      state.item = itemList;
    },
    removeItem: (state, { payload: { item } }) => {
      let qt = state.quantityAll;
      let itemList = state.item;
      let duplicatedElement = itemList.find((p) => p.id === item.id);
      duplicatedElement.quantity -= 1;
      let dupIndex = itemList.findIndex((p) => p.id === item.id);
      itemList[dupIndex] = duplicatedElement;
      qt -= 1;
      state.item = itemList.filter((p) => p.quantity > 0);
      state.quantityAll = qt;
    },
    removeAllItems: (state, { payload: { item } }) => {
      let qt = state.quantityAll;
      let itemList = state.item;
      let duplicatedElement = itemList.find((p) => p.id === item.id);
      duplicatedElement.quantity = 0;
      let dupIndex = itemList.findIndex((p) => p.id === item.id);
      itemList[dupIndex] = duplicatedElement;
      qt -= duplicatedElement.quantity;
      state.item = itemList.filter((p) => p.quantity > 0);
      state.quantityAll = qt;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
