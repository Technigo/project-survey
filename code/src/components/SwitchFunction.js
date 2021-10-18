import React, { useState } from "react";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";

export const SwitchFunction = ({ currentStep }) => {
  if (currentStep === "questionOne") {
    return <QuestionOne />;
  }
  if (currentStep === "questionTwo") {
    return <QuestionTwo />;
  }
  if (currentStep === "questionThree") {
    return <QuestionThree />;
  }
  if (currentStep === "questionFour") {
    return <QuestionFour />;
  }
};
