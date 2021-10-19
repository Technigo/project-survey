import React, { useState } from "react";
import StartPage from "./StartPage";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import Summary from "./Summary";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [step, setStep] = useState(0);

  const onNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const onInterestInputChange = event => {
    setInterestInput(event.target.value);
  };

  const onAgeInputChange = event => {
    setAgeInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };
  // good practice to put funtion up here

  return (
    <div>
      {step === 0 && <StartPage onStepChange={onStepChange} />}
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          interestInput={interestInput}
          onInterestInputChange={onInterestInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          ageInput={ageInput}
          onAgeInputChange={onAgeInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Summary
          nameInput={nameInput}
          interestInput={interestInput}
          ageInput={ageInput}
        />
      )}
    </div>
  );
};

export default Form;
