import React, { useState } from "react";
import FirstQuestion from "./components/FirstQuestion";
import SecondQuestion from "components/SecondQuestion";
import ThirdQuestion from "components/ThirdQuestion";
import Summary from "components/Summary";

export const Entry = () => {
  const [nameInput, setNameInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [step, setStep] = useState(1);

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
