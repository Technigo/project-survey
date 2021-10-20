import React, { useState } from "react";
import SignIn from "./SignIn";
import MovieSelector from "./MovieSelector";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <SignIn
            nameInput={nameInput}
            onNameChangeInput={onNameInputChange}
            onStepChange={onStepChange}
          />
        </div>
      )}
      {step === 2 && <MovieSelector onStepChange={onStepChange} />}
    </div>
  );
};

export default Form;
