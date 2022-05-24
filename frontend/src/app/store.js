import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import memberReducer from '../features/members/membersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    members: memberReducer,
  },
});
