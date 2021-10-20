import React from "react";

const Checkboxes = ({
  happiness,
  onHappinessChange,
  onPreviousQuestionChange,
  onStepChange,
  sad,
  happy,
}) => {
  return (
    <>
      <section className="form-container">
        <label>
          <input
            type="checkbox"
            value={happy}
            onChange={() => onHappinessChange("happy")}
            checked={happiness === "happy"}
          />
          <span role="img" aria-label="happy face">
            😁
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            value={sad}
            onChange={() => onHappinessChange("sad")}
            checked={happiness === "sad"}
          />
          <span role="img" aria-label="sad face">
            🙁
          </span>
        </label>
        <div>
          <button onClick={onPreviousQuestionChange}>Prev question</button>
          <button type="submit" onClick={onStepChange}>
            Next Question
          </button>
        </div>
      </section>
    </>
  );
};
export default Checkboxes;
