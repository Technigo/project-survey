import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [secretnameInput, setSecretnameInput] = useState("");
  const [themeInput, setThemeInput] = useState("");
  const [lifeInput, setLifeInput] = useState("");

  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onSecretnameInputChange = (event) => {
    setSecretnameInput(event.target.value);
  };

  const onThemeInputChange = (event) => {
    setThemeInput(event.target.value);
  };

  const onLifeInputChange = (event) => {
    setLifeInput(event.target.value);
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
          secretname={secretnameInput}
          onSecretnameInputChange={onSecretnameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          Theme={themeInput}
          onThemeInputChange={onThemeInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <FourthQuestion
          lifeInput={lifeInput}
          onLifeInputChange={onLifeInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Overview
          nameInput={nameInput}
          secretnameInput={secretnameInput}
          themeInput={themeInput}
          lifeInput={lifeInput}
        />
      )}
    </div>
  );
};

export default Form;
