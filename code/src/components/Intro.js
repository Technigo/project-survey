import React from "react";

const Intro = ({ onStepChange }) => {
  return (
    <div>
      <h1>Halloween is here</h1>
      <p>Hej you!Ready for your survey?</p>
      <button onClick={onStepChange}>Start</button>
    </div>
  );
};

export default Intro;
