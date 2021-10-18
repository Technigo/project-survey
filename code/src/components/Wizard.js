import React, { useState } from "react";
import { SwitchFunction } from "./SwitchFunction";

export const Wizard = ({ toFeedback }) => {
  const [currentStep, setStep] = useState("questionOne");
  const [answered, setAnswered] = useState(0);
  const toNextStep = () => {
    switch (currentStep) {
      case "questionOne":
        setStep("questionTwo");
        setAnswered(answered + 1);
        break;
      case "questionTwo":
        setStep("questionThree");
        setAnswered(answered + 1);
        break;
      case "questionThree":
        setStep("questionFour");
        setAnswered(answered + 1);
        break;
      case "questionFour":
        setAnswered(answered + 1);
        toFeedback();
        break;
    }
  };
  return (
    <div>
      <div>Progress bar: {answered} out of 10</div>
      <SwitchFunction currentStep={currentStep} />
      <button className="btn" onClick={toNextStep}>
        {currentStep === "questionFour" ? "Finish" : "Continue"}
      </button>
    </div>
  );
};
