import React from "react";

const AgeRadio = ({
  ageRadioInput,
  handleAgeRadioInputChange,
  onStepChange,
  onPreviousQuestionChange,
}) => {
  return (
    <section className="form-container" tabIndex="0">
      <form>
        <h2 className="label-text"> How old do you feel inside?</h2>
        <label>
          <input
            type="radio"
            value="like a kid"
            onChange={handleAgeRadioInputChange}
            checked={ageRadioInput === "like a kid"}
          />
          like a kid
        </label>
        <label>
          <input
            type="radio"
            value="like a rebellious teenager"
            onChange={handleAgeRadioInputChange}
            checked={ageRadioInput === "like a rebellious teenager"}
          />
          like a rebellious teenager
        </label>
        <label>
          <input
            type="radio"
            value="like my age"
            onChange={handleAgeRadioInputChange}
            checked={ageRadioInput === "like my age"}
          />
          like my age
        </label>
        <label>
          <input
            type="radio"
            value="ready for retirement"
            onChange={handleAgeRadioInputChange}
            checked={ageRadioInput === "ready for retirement"}
          />
          ready for retirement
        </label>
      </form>
      <div>
        <button onClick={onPreviousQuestionChange}>Prev question</button>
        <button type="submit" onClick={onStepChange}>
          Next Question
        </button>
      </div>
    </section>
  );
};
export default AgeRadio;
