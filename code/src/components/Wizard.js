import React, { useState } from "react";
import { SwitchFunction } from "./SwitchFunction";

export const Wizard = ({ toFeedback }) => {
  const [currentStep, setStep] = useState("questionOne");
  const [answered, setAnswered] = useState(1);
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
        setStep("questionFive");
        break;
      case "questionFive":
        setAnswered(answered + 1);
        setStep("questionSix");
        break;
      case "questionSix":
        setAnswered(answered + 1);
        setStep("questionSeven");
        break;
      case "questionSeven":
        setAnswered(answered + 1);
        setStep("questionEight");
        break;
      case "questionEight":
        setAnswered(answered + 1);
        setStep("questionNine");
        break;
      case "questionNine":
        setAnswered(answered + 1);
        setStep("anySuggestion");
        break;
      case "anySuggestion":
        setAnswered(answered + 1);
        setStep("questionTen");
        break;
      case "questionTen":
        setAnswered(answered + 1);
        toFeedback();
        break;
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="progress-bar">Progress bar: {answered} out of 10</div>
        <div className="current-step">
          <SwitchFunction currentStep={currentStep} />
        </div>
        <div>
          <button className="btn interaction " onClick={toNextStep}>
            {currentStep === "questionTen" ? "Finish" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};
