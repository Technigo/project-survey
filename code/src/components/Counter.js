import React from 'react';

export const Counter = (props) => {
  const counter = props.counter;
  return (
    <div className="container">
      <p>My current count: {counter}</p>
      <button onClick={() =>props.setCounter(props.counter + 1)}> Next question </button>
    </div>
  )
}