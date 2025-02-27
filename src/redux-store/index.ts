import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import { notificationReducer, postReducer, userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postReducer,
    notifications: notificationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;