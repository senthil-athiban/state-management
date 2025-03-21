import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John",
    preferences: { theme: "light", fontSize: "medium" },
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
  },
});

const loginUserSlice = createSlice({
  name: 'login',
  initialState: {
    user: {name: '', email: ''},
    isLoggedIn: false,
  },
  reducers: {
   signIn: (state, action) => {
    state.user = {...state.user, ...action.payload};
    state.isLoggedIn = true;
   } ,
   signOut: (state) => {
    state.user = {name: '', email: ''};
    state.isLoggedIn = false;
   }
  }
})

const postsSlice = createSlice({
  name: "posts",
  initialState: { list: [], loading: false },
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: { count: 0, items: [] },
  reducers: {
    addNotification: (state: any, action: any) => {
      state.items.push(action.payload);
      state.count = state.items.length;
    },
    clearNotifications: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { reducer: postReducer } = postsSlice;
export const { reducer: notificationReducer } = notificationsSlice;
export const { reducer: loginReducer } = loginUserSlice;

export const { updateName, updatePreferences } = userSlice.actions;
export const { setPosts, setLoading } = postsSlice.actions;
export const { addNotification, clearNotifications } = notificationsSlice.actions;
export const { signIn, signOut } = loginUserSlice.actions;