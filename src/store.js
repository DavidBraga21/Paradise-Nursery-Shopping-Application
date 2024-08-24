// store.js
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;