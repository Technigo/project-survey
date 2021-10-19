import React, { useState } from "react";
import SignIn from "./SignIn";
import MovieSelector from "./MovieSelector";
import MovieRecommendation from "./MovieRecommendation";

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
      {step === 4 && <MovieRecommendation />}
    </div>
  );
};

export default Form;
