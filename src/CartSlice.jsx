// src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, image, cost, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateTotalQuantity: (state) => {
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addItem, updateQuantity, removeItem, updateTotalQuantity } = cartSlice.actions;
export default cartSlice.reducer;
