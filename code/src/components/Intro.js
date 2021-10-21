import React from "react";

const Intro = ({ onStepChange }) => {
  return (
    <div>
      <img src="./pictures/eat.jpg" alt="neon sign saying eat" />
      <p>
        Please answer the following questions regarding restaurants in Sweden
      </p>

      <button onClick={onStepChange}>Start</button>
    </div>
  );
};

export default Intro;
