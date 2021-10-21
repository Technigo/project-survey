import React from "react";
import "./FifthQuestion.css";

const FifthQuestion = ({
  believesInput,
  onBelievesInputChange,
  onStepChange,
}) => {
  return (
    <form className="container">
      <h2 className="fifth-text">
        Have you ever experienced something out of this world?
      </h2>
      <select
        className="select-container"
        onChange={onBelievesInputChange}
        value={believesInput}
      >
        <option value="">Select your answer</option>
        <option value="Yes">Yes!</option>
        <option value="No">No.</option>
        <option value="Possibly">Possibly, I can't be sure.</option>
      </select>
      <button
        className="button"
        disabled={believesInput === ""}
        onClick={onStepChange}
      >
        Show Summary
      </button>
    </form>
  );
};

export default FifthQuestion;
