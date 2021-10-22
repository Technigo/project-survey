import React from "react";

const Greeting = ({onStepChange}) => {
  return (
    <div>
      <h1>Welcome to our free concert ticket giveaway!</h1>
      <h2>Do you want to get some tickets?</h2>
      <button className="button" onClick={onStepChange}>Heck yeah! Let's start!</button>
    </div>
  );
};

export default Greeting;
