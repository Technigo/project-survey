import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [ageGroup, setAgeGroup] = useState();
  const [believesInput, setBelievesInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value);
  };

  const onAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const onBelievesInputChange = (event) => {
    setBelievesInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

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
          surname={surnameInput}
          onSurnameInputChange={onSurnameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          ageGroup={ageGroup}
          onAgeGroupChange={onAgeGroupChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <FourthQuestion
          believesInput={believesInput}
          onBelievesInputChange={onBelievesInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Overview
          nameInput={nameInput}
          surnameInput={surnameInput}
          ageGroup={ageGroup}
          believesInput={believesInput}
        />
      )}
    </div>
  );
};

export default Form;
