import React from "react";

const ElbowRadio = ({
  radioInput,
  handleRadioInputChange,
  onStepChange,
  onPreviousQuestionChange,
}) => {
  return (
    <section className="form-container" tabIndex="0">
      <form onSubmit={e => e.preventDefault()}>
        <h2 className="label-text">
          CAN YOU LICK YOUR ELBOWS?
          <span role="img" aria-label="muscle emoji">
            💪
          </span>
        </h2>
        <label>
          <input
            tabIndex="1"
            type="radio"
            value="YES"
            onChange={handleRadioInputChange}
            checked={radioInput === "YES"}
          />
          yes
        </label>
        <label>
          <input
            tabIndex="2"
            type="radio"
            value="NO"
            onChange={handleRadioInputChange}
            checked={radioInput === "NO"}
          />
          no
        </label>
        <label>
          <input
            tabIndex="3"
            type="radio"
            value="WITH SOME STRETCHING BEFORE"
            onChange={handleRadioInputChange}
            checked={radioInput === "WITH SOME STRETCHING BEFORE"}
          />
          with some stretching before
        </label>
        <label>
          <input
            tabIndex="4"
            type="radio"
            value="I DON'T HAVE ELBOWS"
            onChange={handleRadioInputChange}
            checked={radioInput === "I DON'T HAVE ELBOWS"}
          />
          i don't have elbows
        </label>
        <label>
          <input
            tabIndex="5"
            type="radio"
            value="ONLY IN SPANISH (EL-BOW)"
            onChange={handleRadioInputChange}
            checked={radioInput === "5ONLY IN SPANISH (EL-BOW)"}
          />
          only in spanish (el-bow)
        </label>
      </form>
      <div className="button-container">
        <button onClick={onPreviousQuestionChange}>Prev question</button>
        <button type="submit" name="submit-button" onClick={onStepChange}>
          Next question
        </button>
      </div>
    </section>
  );
};
export default ElbowRadio;
