import React, { useState } from "react";
import Intro from "./Intro";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [candyInput, setCandyInput] = useState("");
  const [creatureInput, setCreatureInput] = useState("");
  const [step, setStep] = useState(0);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value);
  };
  const onCandyInputChange = (event) => {
    setCandyInput(event.target.value);
  };
  const onCreatureInputChange = (event) => {
    setCreatureInput(event.target.value);
  };
  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <container>
      <div className="survey-box">
        {step === 0 && <Intro onStepChange={onStepChange} />}
        {step === 1 && (
          <FirstQuestion
            nameInput={nameInput}
            onNameInputChange={onNameInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 2 && (
          <SecondQuestion
            surnameInput={surnameInput}
            onSurnameInputChange={onSurnameInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 3 && (
          <ThirdQuestion
            onStepChange={onStepChange}
            candyInput={candyInput}
            onCandyInputChange={onCandyInputChange}
          />
        )}
        {step === 4 && (
          <FourthQuestion
            creatureInput={creatureInput}
            onCreatureInputChange={onCreatureInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 5 && (
          <Overview
            nameInput={nameInput}
            surnameInput={surnameInput}
            candyInput={candyInput}
            creatureInput={creatureInput}
          />
        )}
      </div>
    </container>
  );
};

export default Form;
