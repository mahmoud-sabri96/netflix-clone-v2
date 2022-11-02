import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userRedux/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
