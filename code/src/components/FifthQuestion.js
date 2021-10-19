import React from "react";

const FifthQuestion = ({
  degreesInput,
  onDegreesInputChange,
  onStepChange,
}) => {
  return (
    <form class="slidecontainer">
      <input
        type="range"
        min="-157"
        max="121"
        value={degreesInput}
        onChange={onDegreesInputChange}
        className="slider"
        id="myRange"
      />
      <p>
        Value: {degreesInput}
        <span id="demo"></span>
      </p>
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};

export default FifthQuestion;
