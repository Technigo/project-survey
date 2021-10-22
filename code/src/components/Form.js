import React, { useState } from "react";

import Start from "./Start";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import Summary from "./Summary";

// State hooks

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [dropDownInput, setDropDownInput] = useState("");
  const [radioButtonInput, setRadioButtonInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [step, setStep] = useState(1);

  // Functions that handle input from the user

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onDropDownInputChange = (event) => {
    setDropDownInput(event.target.value);
  };

  const onRadioButtonInputChange = (event) => {
    setRadioButtonInput(event.target.value);
  };

  const onTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const onQuestionInputChange = (event) => {
    setQuestionInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Start onStepChange={onStepChange} />}
      {step === 2 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <SecondQuestion
          dropDownInput={dropDownInput}
          onDropDownInputChange={onDropDownInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <ThirdQuestion
          radioButtonInput={radioButtonInput}
          onRadioButtonInputChange={onRadioButtonInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <FourthQuestion
          textInput={textInput}
          onTextInputChange={onTextInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <FifthQuestion
          questionInput={questionInput}
          onQuestionInputChange={onQuestionInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 7 && (
        <Summary
          nameInput={nameInput}
          dropDownInput={dropDownInput}
          radioButtonInput={radioButtonInput}
          textInput={textInput}
          questionInput={questionInput}
        />
      )}
    </div>
  );
};

export default Form;
