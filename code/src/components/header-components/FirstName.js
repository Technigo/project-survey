import React, { useState } from "react";
import { IntroMessage } from "./IntroMessage";
import SubmitButton from "components/buttons-components/SubmitButton";

const FirstName = (props) => {

  /* object destructuring: another way of passing props */
  const { name, onNameInputChange } = props; 

  /* local state */
  const [step, setStep] = useState(1); 

  /* Function for increasing the steps and therefore, being able to render the IntroMessage component */
  const onStepChange = () => {
    setStep(step + 1);
  };

  /* If statement based on the step state */
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
        <SubmitButton onStepChange={onStepChange} name={name} />
      </form>
    );
  } else {
    return <IntroMessage name={name} />;
  }
};

export default FirstName;
