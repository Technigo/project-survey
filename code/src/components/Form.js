import React, { useState } from "react";
import { IntroQuestion } from "./IntroQuestion";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "./SecondQuestion";
import { ThirdQuestion } from "./ThirdQuestion";
import { FourthQuestion } from "./FourthQuestion";
import { Overview } from "./Overview";
import { SubmitQuestion } from "./SubmitQuestion";

const Form = () => {
  const [socialInput, setSocialInput] = useState("");
  const [emotionalInput, setEmotionalInput] = useState("");
  const [physicalInput, setPhysicalInput] = useState("");
  const [workInput, setWorkInput] = useState("");
  const [step, setStep] = useState(0);

  const onSocialInputChange = (event) => {
    setSocialInput(event.target.value);
  };

  const onEmotionalInputChange = (event) => {
    setEmotionalInput(event.target.value);
  };

  const onPhysicalInputChange = (event) => {
    setPhysicalInput(event.target.value);
  };

  const onWorkInputChange = (event) => {
    setWorkInput(event.target.value);
  };

  const nextQuestion = (event) => {
    setStep(step + 1);
    event.preventDefault();
  };

  const previousQuestion = (event) => {
    setStep(step - 1);
    event.preventDefault();
  };

  if (step === 0) {
    // prettier-ignore
    return (
	  <IntroQuestion
			nextQuestion={nextQuestion}
		/>
    );
  } else if (step === 1) {
    // prettier-ignore
    return (
    <FirstQuestion
      socialInput={socialInput}
      onSocialInputChange={onSocialInputChange}
      nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
    />
    );
  } else if (step === 2) {
    // prettier-ignore
    return (
    <SecondQuestion
			emotionalInput={emotionalInput}
      onEmotionalInputChange={onEmotionalInputChange}
      nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
    />
    );
  } else if (step === 3) {
    // prettier-ignore
    return (
    <ThirdQuestion
    physicalInput={physicalInput}
      onPhysicalInputChange={onPhysicalInputChange}
      nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
    />
    );
  } else if (step === 4) {
    // prettier-ignore
    return (
	  <FourthQuestion
			workInput={workInput}
			onWorkInputChange={onWorkInputChange}
			nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
	  />
    );
  } else if (step === 5) {
    // prettier-ignore
    return (
	  <SubmitQuestion
			nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
		/>
    );
  } else if (step === 6) {
    // prettier-ignore
    return (
	  <Overview
			socialInput={socialInput}
	    emotionalInput={emotionalInput}
	    physicalInput={physicalInput}
			workInput={workInput}
	  />
    );
  }
};

export default Form;
