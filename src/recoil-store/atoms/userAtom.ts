import { atom } from "recoil";

export const userAtom = atom({
    key: 'user',
    default: {
        name: "John",
        preferences: { theme: "light", fontSize: "medium" },
    }
});