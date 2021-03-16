import React from "react";

export const Summary = (props) => {
  return (
    <>
    <h2>Your answers:</h2>
      <div>Text: {props.userInput}</div>
      <div>Radio: {props.range}</div>
      <div>Select: {props.type}</div>
    </>
  );
};
