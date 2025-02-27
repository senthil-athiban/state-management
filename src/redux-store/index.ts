import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import {
  loginReducer,
  notificationReducer,
  postReducer,
  userReducer,
} from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: persistReducer(persistConfig, loginReducer),
  counter: counterReducer,
  user: userReducer,
  posts: postReducer,
  notifications: notificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
