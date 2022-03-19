import React, { useState } from "react";
import IntroPage from "./IntroPage";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import SubmitSurvey from "./SubmitSurvey";
import Summary from "./Summary";

const Form = () => {
  const [personInput, setPersonInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [budgetInput, setBudgetInput] = useState("");
  const [awayInput, setAwayInput] = useState("");
  const [step, setStep] = useState(0);

  const handlePersonInputChange = (event) => {
    setPersonInput(event.target.value);
  };

  const handleDestinationInputChange = (event) => {
    setDestinationInput(event.target.value);
  };

  const handleBudgetInputChange = (event) => {
    setBudgetInput(event.target.value);
  };

  const handleAwayInputChange = (event) => {
    setAwayInput(event.target.value);
  };

  const nextQuestion = (event) => {
    setStep(step + 1);
    event.preventDefault();
  };

  if (step === 0) {
    return <IntroPage nextQuestion={nextQuestion} />;
  } else if (step === 1) {
    return (
      <FirstQuestion
        personInput={personInput}
        onPersonInputChange={handlePersonInputChange}
        nextQuestion={nextQuestion}
        step={step}
      />
    );
  } else if (step === 2) {
    return (
      <SecondQuestion
        destinationInput={destinationInput}
        onDestinationInputChange={handleDestinationInputChange}
        nextQuestion={nextQuestion}
        step={step}
      />
    );
  } else if (step === 3) {
    return (
      <ThirdQuestion
        budgetInput={budgetInput}
        onBudgetInputChange={handleBudgetInputChange}
        nextQuestion={nextQuestion}
        step={step}
      />
    );
  } else if (step === 4) {
    return (
      <FourthQuestion
        awayInput={awayInput}
        onAwayInputChange={handleAwayInputChange}
        nextQuestion={nextQuestion}
        step={step}
      />
    );
  } else if (step === 5) {
    return <SubmitSurvey nextQuestion={nextQuestion} />;
  } else if (step === 6) {
    return (
      <Summary
        destinationInput={destinationInput}
        budgetInput={budgetInput}
        awayInput={awayInput}
      />
    );
  }
};

export default Form;
