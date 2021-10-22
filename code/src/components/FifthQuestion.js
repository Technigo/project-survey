import React from "react";

const FifthQuestion = ({
  degreesInput,
  onDegreesInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <h2>What temperature are you use to have on your planet?</h2>
      <input
        className="input-padding"
        type="range"
        min="-157"
        max="121"
        value={degreesInput}
        onChange={onDegreesInputChange}
        className="slider"
        id="myRange"
      />
      <p>
        Degrees: {degreesInput}
        <span id="demo"></span>
      </p>
      <button className="button" onClick={onStepChange}>
        Next questions
      </button>
    </form>
  );
};

export default FifthQuestion;
