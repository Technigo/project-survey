import React from "react";
import './Summary.css'

export const Summary = (props) => {
  return (
    <div className="summary">
    <h2>Your answers:</h2>
      <div>This is how you think of the future: {props.userInput}</div>
      <div>And you believe it will take us {props.type} to get to live on Mars.</div>
      <div>In the future you hoping most to experience {props.range}!</div>
    </div>
  );
};
