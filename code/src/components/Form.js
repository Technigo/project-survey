import React, { useState } from "react";
import "./form.css";

import YourName from "components/YourName";
import Taglines from "./Taglines";
import Drinks from "./Drinks";
//import BravoMentor from "./BravoMentor";
import Summary from "./Summary";
import Mentors from "./Mentors";

const Form = () => {
  const [name, setName] = useState("");
  const [drink, setDrink] = useState("");
  const [tagline, setTagline] = useState("");
  //const [bravo, setBravo] = useState("");
  const [step, setStep] = useState(1);
  const [mentor, setMentor] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onDrinkChange = (event) => {
    setDrink(event.target.value);
  };

  const onTaglineChange = (event) => {
    setTagline(event.target.value);
  };

  // const onBravoChange = (event) => {
  //   setBravo(event.target.value);
  // };

  const onMentorChange = (event) => {
    setMentor(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onPreviousQuestionChange = () => {
    setStep(step - 1);
  };

  // v1
  return (
    <div className="main-container">
      {step === 1 && (
        <YourName
          name={name}
          onNameChange={onNameChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <Taglines
          tagline={tagline}
          onTaglineChange={onTaglineChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <Drinks
          drink={drink}
          onDrinkChange={onDrinkChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Mentors
          mentor={mentor}
          onMentorChange={onMentorChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Summary name={name} drink={drink} tagline={tagline} mentor={mentor} />
      )}
    </div>
  );
};

export default Form;
