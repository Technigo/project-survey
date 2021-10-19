import React, { useState } from "react";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";
import { QuestionFive } from "./questions/QuestionFive";
import { QuestionSix } from "./questions/QuestionSix";
import { QuestionSeven } from "./questions/QuestionSeven";
import { QuestionEight } from "./QuestionEight";
import { QuestionNine } from "./questions/QuestionNine";
import { AnySuggestion } from "./questions/AnySuggestion";
import { QuestionTen } from "./questions/QuestionTen";

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
  if (currentStep === "questionFive") {
    return <QuestionFive />;
  }
  if (currentStep === "questionSix") {
    return <QuestionSix />;
  }
  if (currentStep === "questionSeven") {
    return <QuestionSeven />;
  }
  if (currentStep === "questionEight") {
    return <QuestionEight />;
  }
  if (currentStep === "questionNine") {
    return <QuestionNine />;
  }
  if (currentStep === "anySuggestion") {
    return <AnySuggestion />;
  }
  if (currentStep === "questionTen") {
    return <QuestionTen />;
  }
};
