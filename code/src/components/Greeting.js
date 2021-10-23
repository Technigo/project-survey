import React from "react";

const Greeting = ({onStepChange}) => {
  return (
    <div className="greeting">
      <h1>Welcome to our free concert ticket giveaway!</h1>
      <h2>Do you want to get some tickets?</h2>
      <p>P.S We do not give away flight tickets</p>
      <div className="buttonContainer">
        <button className="button" onClick={onStepChange}>Heck yeah! Let's start!</button>
      </div>
      
    </div>
  );
};

export default Greeting;
