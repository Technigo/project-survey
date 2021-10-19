import React from "react";

const StartPage = ({ onStepChange }) => {
  return (
    <div>
      <h1>Hello first page</h1>
      <button onClick={onStepChange}>Lets go</button>
    </div>
  );
};

export default StartPage;
