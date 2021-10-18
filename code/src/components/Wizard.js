import React, { useState } from "react";
import { QuestionOne } from "./QuestionOne";
import { QuestionTwo } from "./QuestionTwo";
import { QuestionThree } from "./QuestionThree";

export const Wizard = ({ toFeedback }) => {
  const [currentStep, setStep] = useState("questionOne");
  if (currentStep === "questionOne") {
    return <QuestionOne toQuestionTwo={() => setStep("questionTwo")} />;
  }
  if (currentStep === "questionTwo") {
    return <QuestionTwo toQuestionThree={() => setStep("questionThree")} />;
  }
  if (currentStep === "questionThree") {
    return <QuestionThree toSwitch={() => setStep("summary")} />;
  }

  return <button onClick={toFeedback}>Feedback Summary</button>;
};
