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
  const { increment } = useCounter();

  return <button onClick={increment} className="mr-4">Increase</button>;
});

const Decrease = memo(() => {
  const { decrement } = useCounter();
  return <button onClick={decrement}>Decrease</button>;
});

const IsEven = memo(() => {
  const { count } = useCounter();
  const isEven = count % 2 === 0;
  return <p>{isEven ? "Even" : "Odd"}</p>;
});

export default ContextCounterComp;
