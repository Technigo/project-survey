import React from "react";

const SecondQuestion = ({
  surnameInput,
  onSurnameInputChange,
  onStepChange,
}) => {
  return (
    <div className="secondQ">
      <img className="hand" src="./icons/hand.svg" alt="hand-svg"></img>
      <p className="second-p">
        Boring i know but....will also need last name and then we can shake
        hands.
      </p>
      <div className="second">
        <form className="input-second">
          <label className="input" htmlFor="surnameInput"></label>
          <input
            className="input"
            id="surnameInput"
            type="text"
            value={surnameInput}
            onChange={onSurnameInputChange}
          />
          <button className="btn" onClick={onStepChange}>
            NEXT QUESTION
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecondQuestion;
