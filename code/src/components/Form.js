import React, { useState } from "react";
import "./form.css";

import YourName from "components/YourName";
import Taglines from "./Taglines";
import Drinks from "./Drinks";
import Mentors from "./Mentors";
//import BravoMentor from "./BravoMentor";
import Summary from "./Summary";

const Form = () => {
  const [name, setName] = useState("");
  const [drink, setDrink] = useState("");
  const [tagline, setTagline] = useState("");
  //const [bravo, setBravo] = useState("");
  const [step, setStep] = useState(1);
  const [mentor, setMentor] = useState("");
  const [mentorImage, setMentorImage] = useState("");

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

  const onMentorChange = (event, img) => {
    setMentor(event.target.value);
    setMentorImage(img);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onStepBackChange = () => {
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
          onStepBackChange={onStepBackChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <Drinks
          drink={drink}
          onDrinkChange={onDrinkChange}
          onStepBackChange={onStepBackChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Mentors
          mentor={mentor}
          onMentorChange={onMentorChange}
          onStepBackChange={onStepBackChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Summary
          name={name}
          drink={drink}
          tagline={tagline}
          mentor={mentor}
          mentorImage={mentorImage}
        />
      )}
    </div>
  );
};

export default Form;
