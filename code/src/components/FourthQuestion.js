import React from "react";

const options = [
  "some time during the weekend",
  "sunday between 23:30-00:00",
  "between Monday-Friday",
  "sometime after deadline",
];

const FourthQuestion = ({ handInTime, onHandInTimeChange, onStepChange }) => {
  return (
    <section className="form-container">
      <div className="box-wrapper">
        <h2 tabIndex="0">When do you hand in your weekly project?</h2>
        <h3 tabIndex="0">
          Choose ONE of the options by clicking on it
        </h3>
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
                <span>{option}</span>
              </label>
            );
          })}
        </div>
      </div>

      <button disabled={handInTime === ""} onClick={onStepChange}>
        Next Question
      </button>
    </section>
  );
};

export default FourthQuestion;
