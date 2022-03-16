import react, { useState } from "react";

import QuestionName from "./QuestionName";
import QuestionDestination from "./QuestionDestination";
import QuestionCompany from "./QuestionCompany";
import QuestionGoal from "./QuestionGoal";

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

  //Results call structure:
  return <form className="form" onSubmit={onSubmit}></form>;
};

export default Form;
