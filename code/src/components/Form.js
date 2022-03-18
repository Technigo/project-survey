import React, { useState } from "react";

import Intro from "./Intro";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import ProgressBar from "./ProgressBar";
import Summary from "./Summary";

const Form = () => {
  // variabler för användar-input --> states
  const [step, setStep] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [musicInput, setMusicInput] = useState("");
  const [selectOptionInput, setSelectOptionInput] = useState("");
  const [radioInput, setRadioInput] = useState("");

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onMusicInputChange = (event) => {
    setMusicInput(event.target.value);
  };

  const onSelectOptionInputChange = (event) => {
    setSelectOptionInput(event.target.value);
  };

  const onRadioInputChange = (event) => {
    setRadioInput(event.target.value);
  };

  const onNextStepChange = (event) => {
    event.preventDefault()
    setStep(step + 1);
  };

  const onStepBackChange = () => {
    setStep(step - 1);
  };

  // Vad form-komponenten kallar på för andra komponeneter
  return (
    <main>
      <header>
        <h1 class="monday">MONDAY</h1>
        <h1 class="mantra">MANTRA</h1>
      </header>

      {step === 0 && <Intro onNextStepChange={onNextStepChange} />}

      {step === 1 && (
        <QuestionOne
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepBackChange={onStepBackChange}
          onNextStepChange={onNextStepChange}
        />
      )}

      {step === 2 && (
        <QuestionTwo
          nameInput={nameInput}
          musicInput={musicInput}
          onMusicInputChange={onMusicInputChange}
          onStepBackChange={onStepBackChange}
          onNextStepChange={onNextStepChange}
        />
      )}

      {step === 3 && (
        <QuestionThree
          musicInput={musicInput}
          selectOptionInput={selectOptionInput}
          onSelectOptionInputChange={onSelectOptionInputChange}
          onStepBackChange={onStepBackChange}
          onNextStepChange={onNextStepChange}
        />
      )}

      {step === 4 && (
        <QuestionFour
          selectOptionInput={selectOptionInput}
          radioInput={radioInput}
          onRadioInputChange={onRadioInputChange}
          onStepBackChange={onStepBackChange}
          onNextStepChange={onNextStepChange}
        />
      )}

      {step === 5 && (
        <Summary
          nameInput={nameInput}
          musicInput={musicInput}
          selectOptionInput={selectOptionInput}
          radioInput={radioInput}
          onNextStepChange={onNextStepChange}
        />
      )}

      {step > 0 && step < 5 && <ProgressBar step={step} />}
    </main>
  );
};

export default Form;
