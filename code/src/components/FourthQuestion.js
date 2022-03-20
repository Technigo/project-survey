import React from "react";

const options = [
  "some time during the weekend",
  "sunday night sometime between 23:30-00:00",
  "early in the week (Friday included)",
  "maybe in time or could be after deadline",
];

const FourthQuestion = ({ handInTime, onHandInTimeChange, onStepChange }) => {
  return (
    <section className="form-container">
      <h2>When do you hand in your weekly project?</h2>
      <div className="img-wrapper--radio">
        {options.map((option) => {
          return (
            <label
              className="description radio-img hand-in"
              htmlFor={option}
              key={option}
            >
              <input
                type="radio"
                name="handInTime"
                value={option}
                checked={handInTime === option}
                id={option}
                onChange={onHandInTimeChange}
              />
              {option}
            </label>
          );
        })}
      </div>

      <button onClick={onStepChange}>Next Question</button>
    </section>
  );
};

export default FourthQuestion;
