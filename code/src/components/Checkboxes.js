import React from "react";

const Checkboxes = ({
  happiness,
  onHappinessChange,
  onPreviousQuestionChange,
  onStepChange,
  happy,
  sad,
  angry,
  love,
}) => {
  return (
    <>
      <section className="form-container">
        <h2 className="label-text">
          WHAT DO YOU FEEL WHEN YOU SEE KITTENS?
          <span role="img" aria-label="cat emoji">
            😸
          </span>
        </h2>
        <div className="checkbox-container">
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
          <label>
            <input
              type="checkbox"
              value={angry}
              onChange={() => onHappinessChange("angry")}
              checked={happiness === "angry"}
            />
            <span role="img" aria-label="angry face">
              😠
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              value={love}
              onChange={() => onHappinessChange("love")}
              checked={happiness === "love"}
            />
            <span role="img" aria-label="love">
              😍
            </span>
          </label>
        </div>
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
