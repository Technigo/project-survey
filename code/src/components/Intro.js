import React from "react";

const Intro = ({ onStepChange }) => {
  return (
    <div>
      <img className="ghost" src="./icons/ghost.svg" alt="ghost" />
      <h1 className="neonText">Halloween is here!</h1>
      <p>Hello! Ready for your survey?</p>
      <button className="btn" onClick={onStepChange}>
        START
        {/* <span role="img" aria-label="pumpkin">
          🎃
        </span> */}
      </button>
    </div>
  );
};

export default Intro;
