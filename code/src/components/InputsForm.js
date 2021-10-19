import React, { useState } from "react";

import NameQuestion from "./NameQuestion";
import FavoritePun from "./FavoritePun";
import DropDown from "./DropDown";
import RadioButtons from "./RadioButtons";
import AgeRadio from "./AgeRadio";
import Summary from "./Summary";

const InputsForm = () => {
  const [startImage] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [punInput, setPunInput] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [ageRadioInput, setAgeRadioInput] = useState("");
  const [step, setStep] = useState(1);

  const handleFirstNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const handlePunInputChange = event => {
    setPunInput(event.target.value);
  };

  const handleBirdInput = event => {
    setDropdown(event.target.value);
  };

  const handleRadioInputChange = event => {
    setRadioInput(event.target.value);
  };

  const handleAgeRadioInputChange = event => {
    setAgeRadioInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <>
          <section className="image-section">
            <div className="image-container">
              <img
                value={startImage}
                src="https://i.postimg.cc/Y09prSzC/arrows.jpg"
              />
              <button className="startBtn" onClick={onStepChange}>
                Start random quiz
              </button>
            </div>
          </section>
        </>
      )}
      {step === 2 && (
        <NameQuestion
          nameInput={nameInput}
          handleFirstNameInputChange={handleFirstNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <FavoritePun
          punInput={punInput}
          handlePunInputChange={handlePunInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <DropDown
          dropdown={dropdown}
          handleBirdInput={handleBirdInput}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <RadioButtons
          radioInput={radioInput}
          handleRadioInputChange={handleRadioInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <AgeRadio
          ageRadioInput={ageRadioInput}
          handleAgeRadioInputChange={handleAgeRadioInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 7 && (
        <>
          <Summary
            nameInput={nameInput}
            punInput={punInput}
            dropdown={dropdown}
            radioInput={radioInput}
            ageRadioInput={ageRadioInput}
          />
        </>
      )}
    </div>
  );
};
export default InputsForm;
