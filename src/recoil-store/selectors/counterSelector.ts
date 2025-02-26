import { selector } from "recoil";
import { counterAtom } from "../atoms/counterAtom";

export const evenSelector = selector({
    key: 'counterSelector',
    get: ({get}) => {
      const num = get(counterAtom);
      const isEven = num % 2 === 0;
      return isEven;
    },
  });