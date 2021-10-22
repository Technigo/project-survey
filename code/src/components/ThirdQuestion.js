import React from "react";

const ThirdQuestion = ({
  radioButtonInput,
  onRadioButtonInputChange,
  onStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <form>
        <h2>How well do you feel you understood the content?</h2>
        <label className="radiobutton-label" htmlFor="notatallwell-input">
          Not at all well
        </label>
        <input
          id="notatallwell-input"
          type="radio"
          value="not at all well"
          onChange={onRadioButtonInputChange}
          checked={radioButtonInput === "not at all well"}
        />

        <label className="radiobutton-label" htmlFor="notsowell-input">
          Not so well
        </label>
        <input
          id="notsowell-input"
          type="radio"
          value="not so well"
          onChange={onRadioButtonInputChange}
          checked={radioButtonInput === "not so well"}
        />

        <label className="radiobutton-label" htmlFor="somewhatwell-input">
          Somewhat well
        </label>
        <input
          id="somewhatwell-input"
          type="radio"
          value="somewhat well"
          onChange={onRadioButtonInputChange}
          checked={radioButtonInput === "somewhat well"}
        />

        <label className="radiobutton-label" htmlFor="verywell-input">
          Very well
        </label>
        <input
          id="verywell-input"
          type="radio"
          value="very well"
          onChange={onRadioButtonInputChange}
          checked={radioButtonInput === "very well"}
        />

        <label className="radiobutton-label" htmlFor="extremelywell-input">
          Extremely well
        </label>
        <input
          id="extremelywell-input"
          type="radio"
          value="extremely well"
          onChange={onRadioButtonInputChange}
          checked={radioButtonInput === "extremely well"}
        />
        <button disabled={radioButtonInput === ""} onClick={onStepChange}>
          Next question
        </button>
      </form>
    </section>
  );
};

export default ThirdQuestion;
