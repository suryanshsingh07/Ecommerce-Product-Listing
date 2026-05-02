import { atom } from "recoil";

const priceFilterAtom = atom({
  key: 'priceFilterAtom',
  default: { min: 0, max: 999999 },
});

export default priceFilterAtom;
