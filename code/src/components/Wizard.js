import React, { useState } from "react";
import { SwitchFunction } from "./SwitchFunction";

export const Wizard = ({ toFeedback, setValueInRootState, rootState }) => {
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
        let validity = true;
        if (!rootState.quality) {
          alert("Please make a selection");
          setValueInRootState("invalidQuality", true);
          validity = false;
        }
        if (validity) {
          setAnswered(answered + 1);
          setStep("questionFive");
        }
        break;
      case "questionFive":
        setAnswered(answered + 1);
        setStep("questionSix");
        break;
      case "questionSix":
        let validTime = true;
        if (!rootState.deliveryTime) {
          alert("Please make a selection");
          setValueInRootState("invalidTime", true);
          validTime = false;
        }
        if (validTime) {
          setAnswered(answered + 1);
          setStep("questionSeven");
        }
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
        if (rootState.rating >= 6) {
          setAnswered(answered + 2);
          setStep("questionTen");
        } else {
          setAnswered(answered + 1);
          setStep("anySuggestion");
        }
        break;
      case "anySuggestion":
        setAnswered(answered + 1);
        setStep("questionTen");
        break;
      case "questionTen":
        let valid = true;
        const nameRegex = /^[a-zA-Z ]{1,32}$/gi;
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(rootState.email)) {
          setValueInRootState("emailInvalid", true);
          valid = false;
        }
        if (!nameRegex.test(rootState.name)) {
          setValueInRootState("nameInvalid", true);
          valid = false;
        }
        if (valid) {
          setAnswered(answered + 1);
          toFeedback();
        }
        break;
      default:
        console.log("smth is not correct Wizard.js");
        break;
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="progress-bar">{answered} / 11</div>
        <div className="current-step">
          <SwitchFunction rootState={rootState} setValueInRootState={setValueInRootState} currentStep={currentStep} />
        </div>
        <div>
          <button className="btn interaction finish " onClick={toNextStep}>
            {currentStep === "questionTen" ? "Finish" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};
