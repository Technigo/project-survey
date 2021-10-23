import React from "react";

// Question with radio buttons about how well the user understood the content

const ThirdQuestion = ({
  radioButtonInput,
  onRadioButtonInputChange,
  onStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <form className="form-section">
        <h2>How well do you feel you understood the content?</h2>
        <div className="radiobutton-container">
          <div className="radiobutton-label-wrapper">
            <label className="radiobutton-label" htmlFor="notatallwell-input">
              <span role="img" aria-label="not at all well">
                😱
              </span>
            </label>
            <input
              id="notatallwell-input"
              type="radio"
              value="not at all well"
              onChange={onRadioButtonInputChange}
              checked={radioButtonInput === "not at all well"}
            />
            <span aria-hidden="true" className="checked"></span>
          </div>

          <div className="radiobutton-label-wrapper">
            <label className="radiobutton-label" htmlFor="notsowell-input">
              <span role="img" aria-label="not so well">
                😬
              </span>
            </label>
            <input
              id="notsowell-input"
              type="radio"
              value="not so well"
              onChange={onRadioButtonInputChange}
              checked={radioButtonInput === "not so well"}
            />
            <span aria-hidden="true" className="checked"></span>
          </div>

          <div className="radiobutton-label-wrapper">
            <label className="radiobutton-label" htmlFor="somewhatwell-input">
              <span role="img" aria-label="somewhat well">
                🙂
              </span>
            </label>
            <input
              id="somewhatwell-input"
              type="radio"
              value="somewhat well"
              onChange={onRadioButtonInputChange}
              checked={radioButtonInput === "somewhat well"}
            />
            <span aria-hidden="true" className="checked"></span>
          </div>

          <div className="radiobutton-label-wrapper">
            <label className="radiobutton-label" htmlFor="verywell-input">
              <span role="img" aria-label="very well">
                😎
              </span>
            </label>
            <input
              id="verywell-input"
              type="radio"
              value="very well"
              onChange={onRadioButtonInputChange}
              checked={radioButtonInput === "very well"}
            />
            <span aria-hidden="true" className="checked"></span>
          </div>

          <div className="radiobutton-label-wrapper">
            <label className="radiobutton-label" htmlFor="extremelywell-input">
              <span role="img" aria-label="very well">
                🥳
              </span>
            </label>
            <input
              id="extremelywell-input"
              type="radio"
              value="extremely well"
              onChange={onRadioButtonInputChange}
              checked={radioButtonInput === "extremely well"}
            />
            <span aria-hidden="true" className="checked"></span>
          </div>
        </div>
        <button disabled={radioButtonInput === ""} onClick={onStepChange}>
          Next question
        </button>
      </form>
    </section>
  );
};

export default ThirdQuestion;
