import React, { useState } from "react";
import { IntroMessage } from "./IntroMessage";

const FirstName = (props) => {

  const { name, onNameInputChange } = props; /* object destructuring: another way of passing props */
  const [step, setStep] = useState(1); /* step state */

/*  */
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
        />

        <button
          className="submit-btn"
          disabled={name === ""}
          onClick={onStepChange} /* When the user clicks submit, the function onStepChange is called and adds one to the step variable,therefore, the condition is not true anymore */
        >
          Submit
        </button>
      </form>
    );
  } else {
    return <IntroMessage name={name} />;
  }
};

export default FirstName;
