
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { increment, decrement, selectCount, selectIsEven } from "../redux-store/slices/counterSlice";

const ReduxCounter = () => {
  return (
    <div>
      <p className="font-bold">Using Redux</p>
      <Count />
      <Increase />
      <Decrease />
      <IsEvenComponent />
    </div>
  );
};

const Count = () => {
  const count = useAppSelector(selectCount);
  return <div>{count}</div>;
};

const Increase = () => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(increment())} className="mr-4">
      Increase
    </button>
  );
};

const Decrease = () => {
  const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(decrement())}>Decrease</button>;
};

const IsEvenComponent = () => {
  const isEven = useAppSelector(selectIsEven);
  return <p>{isEven ? "Even" : "Odd"}</p>;
};

export default ReduxCounter;