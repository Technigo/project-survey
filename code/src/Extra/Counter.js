import React from "react";

export const Counter = (props) => {
  const counter = props.counter;
  return (
    <div>
      <div>My counter is: {props.counter}</div>
      <button onClick={() => props.setCounter(counter + 1)}>
        increase button
      </button>
      <button onClick={() => props.setCounter(counter - 1)}>
        decrease button
      </button>
    </div>
  );
};
