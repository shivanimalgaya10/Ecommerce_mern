// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    user: userReducer,
    // other reducers if any
  },
});
