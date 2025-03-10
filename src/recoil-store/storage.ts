import secureLocalStorage from 'react-secure-storage';

export interface PersistStorage {
  setItem(key: string, value: string): void | Promise<void>;
  mergeItem?(key: string, value: string): Promise<void>;
  getItem(key: string): null | string | Promise<null | string>;
  removeItem(key: string): void;
}

export const secureStorage: PersistStorage = {
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
        const existing = JSON.parse(existingValue);
        const newVal = JSON.parse(value);
        const merged = { ...existing, ...newVal };

        secureLocalStorage.setItem(key, JSON.stringify(merged));
      } catch (e: unknown) {
        secureLocalStorage.setItem(key, value);
      }
    } else {
      secureLocalStorage.setItem(key, value);
    }
  },
};
