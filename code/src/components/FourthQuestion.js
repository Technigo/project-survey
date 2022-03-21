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
        <h2>When do you hand in your weekly project?</h2>
        <h3>
          You can only choose one of the options and you need to click on the
          box you want to select
        </h3>
        <div className="img-wrapper--radio">
          {options.map((option) => {
            return (
              <label
                className="description radio-img"
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

      <button onClick={onStepChange}>Next Question</button>
    </section>
  );
};

export default FourthQuestion;
