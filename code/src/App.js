import React, { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Wizard } from "./components/Wizard";
import { Summary } from "./components/Summary";

export const App = () => {
  const [currentStep, setStep] = useState("welcome");
  const [rootState, setRootState] = useState({});
  if (currentStep === "welcome") {
    return <Welcome moveOn={() => setStep("wisard")} />;
  }
  if (currentStep === "wisard") {
    return <Wizard toFeedback={() => setStep("summary")} />;
  }
  if (currentStep === "summary") {
    return <Summary />;
  }
};
