import React, { memo } from "react";
import { useCounter } from "../context/counter.context";

const ContextCounterComp = () => {
  return (
    <div>
      <p className="font-bold">Using Context API</p>
      <Count />
      <Increase />
      <Decrease />
      <IsEven />
    </div>
  );
};

const Count = memo(() => {
  const { count } = useCounter();
  return <p>count: {count}</p>;
});

const Increase = memo(() => {
  const { setCount } = useCounter();

  return <button onClick={() => setCount((p) => p + 1)} className="mr-4">Increase</button>;
});

const Decrease = memo(() => {
  const { setCount } = useCounter();
  return <button onClick={() => setCount((p) => p - 1)}>Decrease</button>;
});

const IsEven = memo(() => {
  const { count } = useCounter();
  const isEven = count % 2 === 0;
  return <p>{isEven ? "Even" : "Odd"}</p>;
});

export default ContextCounterComp;
