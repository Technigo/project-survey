import React, { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Wizard } from "./components/Wizard";
import { Summary } from "./components/Summary";

export const App = () => {
  const [currentStep, setStep] = useState("welcome");
  const [rootState, setRootState] = useState({
    rating: "5",
    features: {
      soundQuality: false,
      ergonomicDesign: false,
      affordability: false,
      other: false,
    },
    featuresOthers: "",
  });

  const setValueInRootState = (key, value) => {
    setRootState({ ...rootState, [key]: value });
  };

  // setValueInRootState('rating', 5);

  // before: const [rating, setRating] = useState("5");
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
