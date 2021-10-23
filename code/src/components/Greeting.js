import React from "react";

const Greeting = ({onStepChange, step}) => {
  return (
    <div className="greeting">
      <h1>Welcome to our free concert ticket giveaway!</h1>
      <h2>Do you want to get some tickets?</h2>
      <p>P.S We do not give away flight tickets</p>
      <p>This is not a sketchy giveaway and we will not ask for you bank account.</p>
      <div className="buttonContainer">
        <button className="button" onClick={onStepChange}>Heck yeah! Let's start!</button>
      </div>
      
    </div>
  );
};

export default Greeting;
