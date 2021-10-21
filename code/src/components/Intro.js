import React from "react";

const Intro = ({ onStepChange }) => {
  return (
    <div className="wrapper">
      <p className="form-wrapper">
        Please answer the following questions regarding restaurants in Sweden
      </p>

      <button onClick={onStepChange}>Start</button>
    </div>
  );
};

export default Intro;
