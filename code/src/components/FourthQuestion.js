import React from "react";
import "./FourthQuestion.css";

const FourthQuestion = ({
  believesInput,
  onBelievesInputChange,
  onStepChange,
}) => {
  return (
    <form className="second-container">
      <h2 className="fourth-text">
        Do you believe there's life on another planet?
      </h2>
      <select
        className="select-container"
        onChange={onBelievesInputChange}
        value={believesInput}
      >
        <option value="">Select your answer</option>
        <option value="Yes">
          Yes, I believe there's life on another planet.
        </option>
        <option value="No">
          No, I don't believe there's life on another planet.
        </option>
        <option value="Possibly">
          Possibly, I'm not sure what to believe.
        </option>
      </select>
      <button
        className="second-button"
        disable={believesInput === ""}
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  );
};

export default FourthQuestion;
