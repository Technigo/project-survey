import React from "react";

const AgeRadio = ({
  ageRadioInput,
  handleAgeRadioInputChange,
  onStepChange,
}) => {
  return (
    <section className="radio-question form-container">
      <form>
        How old do you feel inside?
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
      <button onClick={onStepChange}>Summary</button>
    </section>
  );
};
export default AgeRadio;
