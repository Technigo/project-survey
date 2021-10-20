import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [dropDownInput, setDropDownInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onDropDownInputChange = (event) => {
    setDropDownInput(event.target.value);
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
          dropDownInput={dropDownInput}
          onDropDownInputChange={onDropDownInputChange}
          onStepChange={onStepChange}
        />
      )}
    </div>
  );
};

export default Form;
