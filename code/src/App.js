import React, { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Wizard } from "./components/Wizard";
import { Summary } from "./components/Summary";

export const App = () => {
  const [currentStep, setStep] = useState("welcome");
  const [rootState, setRootState] = useState({
    design: "5",
    variety: "5",
    quality: "",
    invalidQuality: false,
    deliveryTime: "",
    invalidTime: false,
    friendliness: "5",
    suggestionInput: "",
    name: "",
    nameInvalid: false,
    email: "",
    emailInvalid: false,
    rating: "5",
    features: {
      soundQuality: false,
      ergonomicDesign: false,
      affordability: false,
      other: false,
    },
    featuresOthers: "",
  });
  console.log("root", rootState);

  const setValueInRootState = (key, value) => {
    setRootState((oldState) => ({ ...oldState, [key]: value }));
  };

  if (currentStep === "welcome") {
    return <Welcome moveOn={() => setStep("wizard")} />;
  }
  if (currentStep === "wizard") {
    return <Wizard rootState={rootState} setValueInRootState={setValueInRootState} toFeedback={() => setStep("summary")} />;
  }
  if (currentStep === "summary") {
    return <Summary rootState={rootState} />;
  }
};
