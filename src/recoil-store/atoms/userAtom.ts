import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

export const userAtom = atom({
    key: 'user',
    default: {
        name: "John",
        preferences: { theme: "light", fontSize: "medium" },
    }
});


const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const userLoginState = atom({
  key: 'userLoginState',
  default: {
    isLoggedIn: false,
    username: '',
    token: '',
  },
  effects_UNSTABLE: [persistAtom],
});