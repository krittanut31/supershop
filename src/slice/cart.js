import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [], // { name, price, type, reviews, bg, id, quantity }
    quantityAll: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, { payload: { item } }) => {
      // state.item = [...state.item, item];
      let quantityItem = state.quantityAll;
      let itemList = state.item;
      let total = state.totalPrice;
      let duplicatedElement = itemList.find((p) => p.id === item.id);
      if (duplicatedElement) {
        duplicatedElement.quantity += 1;
        let dupIndex = itemList.findIndex((p) => p.id === item.id);
        itemList[dupIndex] = duplicatedElement;
        quantityItem += 1;
        total += itemList[dupIndex].price;
      } else {
        itemList.push(item);
        let dupIndex = itemList.findIndex((p) => p.id === item.id);
        quantityItem += 1;
        total += itemList[dupIndex].price;
      }
      state.quantityAll = quantityItem;
      state.item = itemList;
      state.totalPrice = total;
    },
    removeItem: (state, { payload: { item } }) => {
      // state.item = [];
      let quantityItem = state.quantityAll;
      let itemList = state.item;
      let total = state.totalPrice;
      let duplicatedElement = itemList.find((p) => p.id === item.id);
      duplicatedElement.quantity -= 1;
      let dupIndex = itemList.findIndex((p) => p.id === item.id);
      itemList[dupIndex] = duplicatedElement;
      quantityItem -= 1;
      total -= itemList[dupIndex].price;
      state.item = itemList.filter((p) => p.quantity > 0);
      state.quantityAll = quantityItem;
      state.totalPrice = total;
    },
    removeAllItems: (state, { payload: { item } }) => {
      let quantityItem = state.quantityAll;
      let itemList = state.item;
      let total = state.totalPrice;
      let duplicatedElement = itemList.find((p) => p.id === item.id);
      duplicatedElement.quantity = 0;
      let dupIndex = itemList.findIndex((p) => p.id === item.id);
      itemList[dupIndex] = duplicatedElement;
      total -= quantityItem * itemList[dupIndex].price;
      quantityItem -= duplicatedElement.quantity;
      state.item = itemList.filter((p) => p.quantity > 0);
      state.quantityAll = quantityItem;
      state.totalPrice = total;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
