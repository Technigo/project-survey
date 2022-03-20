import React from "react";

const SecondQuestion = ({
  destinationInput,
  onDestinationInputChange,
  nextQuestion,
  step,
}) => {
  return (
    <main className="main-container map">
      <p tabindex="0">Question number : {step} </p>
      <h3 tabindex="0">Which vacation do you prefer?</h3>
      <form className="form-container">
        <select
          className="dropdown"
          onChange={onDestinationInputChange}
          value={destinationInput}
          tabIndex="0"
        >
          <option disabled value="">
            Select destination:
          </option>
          <option value="Go to a warm country">Go somewere warm</option>
          <option value="Go out in nature">Go out into the wild</option>
          <option value="Go skiing">Go skiing</option>
          <option value="Taking a city trip">Go to the city</option>
        </select>
        <button className="next-btn" onClick={nextQuestion}>
          Next
        </button>
      </form>
    </main>
  );
};

export default SecondQuestion;
