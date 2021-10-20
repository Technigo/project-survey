import React, { useState } from "react";

import NameQuestion from "./NameQuestion";
import LastSong from "./LastSong";
import DropDown from "./BirdQuestion";
import ElbowRadio from "./ElbowRadio";
import AgeRadio from "./AgeRadio";
import ColorPicker from "./ColorPicker";
import Checkboxes from "./Checkboxes";
import Summary from "./Summary";

const InputsForm = () => {
  const [startImage] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [songInput, setSongInput] = useState("");
  const [birdInput, setBirdInput] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [ageRadioInput, setAgeRadioInput] = useState("");
  const [colorInput, setColor] = useState("");
  const [happiness, setHappiness] = useState("");
  const [step, setStep] = useState(0);

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

  const handleColorInputChange = event => {
    setColor(event.target.value);
  };

  const onHappinessChange = feeling => {
    setHappiness(feeling);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onPreviousQuestionChange = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <div className="question-number">
        {step <= 6 && <p>Question number: {step}/6</p>}
      </div>
      {step === 0 && (
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

      {step === 1 && (
        <NameQuestion
          nameInput={nameInput}
          handleFirstNameInputChange={handleFirstNameInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <LastSong
          songInput={songInput}
          handleSongInputChange={handleSongInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <DropDown
          birdInput={birdInput}
          handleBirdInputChange={handleBirdInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <ElbowRadio
          radioInput={radioInput}
          handleRadioInputChange={handleRadioInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <AgeRadio
          ageRadioInput={ageRadioInput}
          handleAgeRadioInputChange={handleAgeRadioInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <ColorPicker
          colorInput={colorInput}
          handleColorInputChange={handleColorInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 7 && (
        <Checkboxes
          happiness={happiness}
          onHappinessChange={onHappinessChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 8 && (
        <>
          <Summary
            nameInput={nameInput}
            songInput={songInput}
            birdInput={birdInput}
            radioInput={radioInput}
            ageRadioInput={ageRadioInput}
            colorInput={colorInput}
            happiness={happiness}
          />
        </>
      )}
    </div>
  );
};
export default InputsForm;
