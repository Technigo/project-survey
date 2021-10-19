import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const onSurnameInputChange = event => {
    setSurnameInput(event.target.value);
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
        <Overview nameInput={nameInput} surnameInput={surnameInput} />
      )}
    </div>
  );
};

export default Form;
