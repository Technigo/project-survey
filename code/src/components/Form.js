import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [classInput, setClassInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const onRoleInputChange = event => {
    setRoleInput(event.target.value);
  };

  const onClassInputChange = event => {
    setClassInput(event.target.value);
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
          surname={roleInput}
          onRoleInputChange={onRoleInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          class={classInput}
          onClassInputChange={onClassInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Overview
          nameInput={nameInput}
          roleInput={roleInput}
          classInput={classInput}
        />
      )}
    </div>
  );
};

export default Form;
