import { selector } from "recoil";
import { userAtom } from "../atoms/userAtom";

export const userNameSelector = selector({
    key: 'userNameSelector',
    get: ({get}) => {
        const user = get(userAtom);
        return user.name
    }
})

export const userPreferenceSelector = selector({
    key: 'userPreferenceSelector',
    get: ({get}) => {
        const user = get(userAtom);
        return user.preferences;
    }
})