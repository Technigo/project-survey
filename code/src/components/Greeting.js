import React from "react";

const Greeting = ({onStepChange}) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>This is our free concert ticket giveaway</h2>
      <button onClick={onStepChange}>Heck yeah! Let's start!</button>
    </div>
  );
};

export default Greeting;
