import { atom, DefaultValue, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';
import secureLocalStorage from "react-secure-storage";

export const userAtom = atom({
    key: 'user',
    default: {
        name: "John",
        preferences: { theme: "light", fontSize: "medium" },
    }
});

export interface PersistStorage {
  setItem(key: string, value: string): void | Promise<void>;
  mergeItem?(key: string, value: string): Promise<void>;
  getItem(key: string): null | string | Promise<null | string>;
  removeItem(key: string): void;
}

const secureStorage: PersistStorage = {
  getItem: (key: string): null | string => {
    return secureLocalStorage.getItem(key) as null | string;
  },
  setItem: (key: string, value: string): void => {
    secureLocalStorage.setItem(key, value);
  },
  removeItem: (key: string): void => {
    secureLocalStorage.removeItem(key);
  },
  mergeItem: async (key: string, value: string): Promise<void> => {
    const existingValue = secureLocalStorage.getItem(key) as string | null;
    
    if (existingValue) {
      try {
        // Parse existing value and new value
        const existing = JSON.parse(existingValue);
        const newVal = JSON.parse(value);
        
        // Merge objects
        const merged = { ...existing, ...newVal };
        
        // Store merged result
        secureLocalStorage.setItem(key, JSON.stringify(merged));
      } catch (e:unknown) {
        // If parsing fails, just overwrite with new value
        console.log('Faile to delete:',e);
        secureLocalStorage.setItem(key, value);
      }
    } else {
      // No existing value, just set the new one
      secureLocalStorage.setItem(key, value);
    }
  }
};

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: secureStorage,
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

export const userLoginSelector = selector({
  key: 'userLoginSelector',
  get: ({get}) => {
    const user = get(userLoginState);
    return user
  },
  set: ({ reset}, newValue) => {
    if (newValue instanceof DefaultValue) {
      // Reset the atom
      reset(userLoginState);
      
      // Also directly clear from secure storage
      secureLocalStorage.removeItem('recoil-persist');
      
      return;
    }
    
    // Handle normal set operations
    // set(userLoginState, newValue);
  }
})