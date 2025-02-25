import { selector } from "recoil";
import { textState } from "../atoms/text";

export const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
      const text = get(textState);
      return text.length;
    },
  });