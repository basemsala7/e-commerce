import React from "react";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement } from "../redux/counter";
const Counter = () => {
  const value = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{value}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
