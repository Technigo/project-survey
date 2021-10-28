import React, { useState, useEffect } from "react";
import { IntroMessage } from "./IntroMessage";

const FirstName = (props) => {
  const { name, onNameInputChange } = props;

  const [step, setStep] = useState(1); /* step state */

  const onStepChange = () => {
    setStep(step + 1);
  };

  if (step === 1) {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <label className="label-firstName" htmlFor="inputName">
          Type your name{" "}
        </label>
        <input
          type="text"
          id="inputName"
          value={name}
          className="input-name"
          onChange={onNameInputChange}
          // onChange={(e) => onNameInputChange(e)}
          // onChange={(e) => setNameInput(e.target.value)}
        />

        <button
          className="submit-btn"
          disabled={name === ""}
          onClick={onStepChange}
        >
          Submit
        </button>
      </form>
    );
  } else {
    return <IntroMessage
    name={name} />;
  }
};

export default FirstName;
