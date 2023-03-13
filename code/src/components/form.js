 /* eslint-disable */

import React, { useState } from "react";


import NameQuestion from "./NameQuestion.js";

export const Form = () => {

  const [nameInput, setNameInput] = useState("");
  

  const handleFirstNameInputChange = event => {
    setNameInput(event.target.value);
  };

  

  return (
    <div>
      <div className="question-number">
        {step <= 7 && <p>Question number: {step}/7</p>}
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
      
    </div>
  );
};