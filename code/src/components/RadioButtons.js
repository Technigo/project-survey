import React from "react";

const radioButtonsAnswers = ["True", "False"];

const RadioButtons = (props) => {
  return (
    <section className="radioButtons-section">
      <h2 className="heading-two">True or False ?</h2>

      <p className="radioButton-text">
        {" "}
        1. A parameter is the value inside the function once is invoked.
      </p>

      <form>
        {radioButtonsAnswers.map((answer) => (
          <label className="label" key={answer}>
            <input
              type="radio"
              value={answer}
              onChange={props.onSetTrueOrFalse}
              checked={props.trueOrFalse === answer}
            />
            {answer}
          </label>
        ))}
      </form>

      <p className="radioButton-text">
        2. Variables that start with const can not be reassigned.{" "}
      </p>

      <form>
        {radioButtonsAnswers.map((answer2) => (
          <label className="label" key={answer2}>
            <input
              type="radio"
              value={answer2}
              onChange={props.onSetTrueOrFalse2}
              checked={props.trueOrFalse2 === answer2}
            />
            {answer2}
          </label>
        ))}
      </form>

      <p className="radioButton-text">
        3. In JavaScript, the number zero is considered a falsy value.{" "}
      </p>

      <form>
        {radioButtonsAnswers.map((answer3) => (
          <label className="label" key={answer3}>
            <input
              type="radio"
              value={answer3}
              onChange={props.onSetTrueOrFalse3}
              checked={props.trueOrFalse3 === answer3}
            />
            {answer3}
          </label>
        ))}
      </form>

      <button className="next-btn" onClick={props.onStepChange}>
        Next
      </button>
    </section>
  );
};

export default RadioButtons;
