import React, { useState } from "react";

import Info from "./Info";
import QuestionName from "./QuestionName";
import QuestionDestination from "./QuestionDestination";
import QuestionCompany from "./QuestionCompany";
import QuestionGoal from "./QuestionGoal";
import QuestionActivity from "./QuestionActivity";

const Form = () => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [company, setCompany] = useState("");
  const [goal, setGoal] = useState("");
  const [step, setStep] = useState(0);
  const numberOfQuestions = 5;

  const onSubmbit = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  // Here we go with the state property update functions:
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const onActivityChange = (event) => {
    setActivity(event.target.value);
  };
  const onCompanyChange = (event) => {
    setCompany(event.target.value);
  };
  const onGoalChange = (event) => {
    setGoal(event.target.value);
  };
  const onStepChange = () => {
    setStep(step + 1);
  };

  //Let's structure the steps:
  return (
    <form className="form">
      {step === 0 && <Info />}
      {step === 1 && <QuestionName name={name} onNameChange={onNameChange} />}
      {step === 2 && (
        <QuestionDestination
          destination={destination}
          onDestinationChange={onDestinationChange}
        />
      )}
      {step === 3 && (
        <QuestionActivity
          activity={activity}
          onActivityChange={onActivityChange}
        />
      )}
      {step === 4 && (
        <QuestionCompany company={company} onCompanyChange={onCompanyChange} />
      )}
      {step === 5 && <QuestionGoal goal={goal} onGoalChange={onGoalChange} />}
    </form>
  );
};

export default Form;
