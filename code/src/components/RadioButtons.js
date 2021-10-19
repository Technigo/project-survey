import React from "react";

const RadioButtons = ({ radioInput, handleRadioInputChange, onStepChange }) => {
  return (
    <section className="radio-question form-container">
      <form>
        Can you lick your elbows?
        <label>
          <input
            type="radio"
            value="YES"
            onChange={handleRadioInputChange}
            checked={radioInput === "YES"}
          />
          YES
        </label>
        <label>
          <input
            type="radio"
            value="NO"
            onChange={handleRadioInputChange}
            checked={radioInput === "NO"}
          />
          NO
        </label>
        <label>
          <input
            type="radio"
            value="WITH SOME STRETCHING BEFORE"
            onChange={handleRadioInputChange}
            checked={radioInput === "WITH SOME STRETCHING BEFORE"}
          />
          WITH SOME STRETCHING BEFORE
        </label>
        <label>
          <input
            type="radio"
            value="I DON'T HAVE ELBOWS"
            onChange={handleRadioInputChange}
            checked={radioInput === "I DON'T HAVE ELBOWS"}
          />
          I DON'T HAVE ELBOWS
        </label>
        <label>
          <input
            type="radio"
            value="ONLY IN SPANISH (EL-BOW)"
            onChange={handleRadioInputChange}
            checked={radioInput === "5ONLY IN SPANISH (EL-BOW)"}
          />
          ONLY IN SPANISH (EL-BOW)
        </label>
      </form>
      <button onClick={onStepChange}>Summary</button>
    </section>
  );
};
export default RadioButtons;
