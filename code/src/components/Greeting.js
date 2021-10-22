import React from "react";

const Greeting = ({onStepChange}) => {
  return (
    <div>
      <h1>Welcome to our free concert ticket giveaway!</h1>
      <h2>Do you want to get some tickets?</h2>
      <p>All concerts are being held in Sweden, so get on over here!</p>
      <p>P.S We do not give away flight tickets</p>
      <button className="button" onClick={onStepChange}>Heck yeah! Let's start!</button>
    </div>
  );
};

export default Greeting;
