import React, { useState } from "react";

import Header from "./Header";
import StartQuestion from "./StartQuestion";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import Overview from "./Overview";

const Form = () => {
  const [startQuestion, setStartQuestion] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [believesInput, setBelievesInput] = useState("");
  const [step, setStep] = useState(1);

  const onStartQuestionChange = (event) => {
    setStartQuestion(event.target.value);
  };

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
    <>
      <Header />
      <div className="main-container">
        {step === 1 && (
          <StartQuestion
            startQuestion={startQuestion}
            onStartQuestionChange={onStartQuestionChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 2 && (
          <FirstQuestion
            nameInput={nameInput}
            onNameInputChange={onNameInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 3 && (
          <SecondQuestion
            surname={surnameInput}
            onSurnameInputChange={onSurnameInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 4 && (
          <ThirdQuestion
            ageGroup={ageGroup}
            onAgeGroupChange={onAgeGroupChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 5 && (
          <FourthQuestion
            believesInput={believesInput}
            onBelievesInputChange={onBelievesInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 6 && (
          <Overview
            nameInput={nameInput}
            surnameInput={surnameInput}
            ageGroup={ageGroup}
            believesInput={believesInput}
          />
        )}
      </div>
    </>
  );
};

export default Form;
