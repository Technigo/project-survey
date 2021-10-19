import React, { useState } from "react";

import NameQuestion from "./NameQuestion";
import LastSong from "./LastSong";
import DropDown from "./BirdQuestion";
import ElbowRadio from "./ElbowRadio";
import AgeRadio from "./AgeRadio";
import Summary from "./Summary";

const InputsForm = () => {
  const [startImage] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [songInput, setSongInput] = useState("");
  const [birdInput, setBirdInput] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [ageRadioInput, setAgeRadioInput] = useState("");
  const [step, setStep] = useState(1);

  const handleFirstNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const handleSongInputChange = event => {
    setSongInput(event.target.value);
  };

  const handleBirdInputChange = event => {
    setBirdInput(event.target.value);
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
          <section className="image-section" tabIndex="0">
            <div className="image-container">
              <img
                value={startImage}
                src="https://i.postimg.cc/Y09prSzC/arrows.jpg"
                alt="neon arrow signs"
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
        <LastSong
          songInput={songInput}
          handleSongInputChange={handleSongInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <DropDown
          birdInput={birdInput}
          handleBirdInputChange={handleBirdInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <ElbowRadio
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
            songInput={songInput}
            birdInput={birdInput}
            radioInput={radioInput}
            ageRadioInput={ageRadioInput}
          />
        </>
      )}
    </div>
  );
};
export default InputsForm;
