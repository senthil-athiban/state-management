import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../recoil-store/atoms/counterAtom";
import { evenSelector } from "../recoil-store/selectors/counterSelector";

const RecoilCounter = () => {
  return (
    <div>
      <p className="font-bold">Using Recoil</p>
      <Count />
      <Increase />
      <Decrease />
      <IsEvenComponent />
    </div>
  );
};

const Count = () => {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
};

const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={() => setCount((p) => p + 2)}>Increase</button>;
};

const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((p) => p - 1)}>Decrease</button>;
};

// selector
const IsEvenComponent = () => {
  const isEven = useRecoilValue(evenSelector);
  return <p>{isEven ? "Even" : "Odd"}</p>;
};

export default RecoilCounter;
