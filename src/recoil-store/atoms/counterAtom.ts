import { atom } from 'recoil';

export const counterAtom = atom<number>({
  key: 'counter',
  default: 0,
});