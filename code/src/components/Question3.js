import React, { useState } from 'react';

const Question3 = ({ question3, setQuestion3, handleStepIncrese }) => {
  // The State Hook that prevents the button to be used before the user have made a change
  // of the radiobuttons.
  const [chosen, setChosen] = useState(false);
  // Forwards the value of the chosen radiobutton to the App-component.
  const handleQuestion3Change = (event) => {
    setQuestion3(event.target.value)
    setChosen(true);
  }

  return (
    <>
      <div className="question-box">
        <p className="question">How are you feeling?</p>
        <div className="radioBtnContainer">
          <label htmlFor="happy" className="radioBtn">Happy
            <input
              type="radio"
              id="happy"
              value="happy"
              checked={question3 === 'happy'}
              onChange={(event) => handleQuestion3Change(event)} />
          </label>
          <label htmlFor="sad" className="radioBtn">Sad
            <input
              type="radio"
              id="sad"
              value="sad"
              checked={question3 === 'sad'}
              onChange={(event) => handleQuestion3Change(event)} />
          </label>
          <label htmlFor="angry" className="radioBtn">Angry
            <input
              type="radio"
              id="angry"
              value="angry"
              checked={question3 === 'angry'}
              onChange={(event) => handleQuestion3Change(event)} />
          </label>
          <label htmlFor="hungry" className="radioBtn">Hungry
            <input
              type="radio"
              id="hungry"
              value="hungry"
              checked={question3 === 'hungry'}
              onChange={(event) => handleQuestion3Change(event)} />
          </label>
          <label htmlFor="tired" className="radioBtn">Tired
            <input
              type="radio"
              id="tired"
              value="tired"
              checked={question3 === 'tired'}
              onChange={(event) => handleQuestion3Change(event)} />
          </label>
          <label htmlFor="confused" className="radioBtn">Confused
            <input
              type="radio"
              id="confused"
              value="confused"
              checked={question3 === 'confused'}
              onChange={(event) => handleQuestion3Change(event)} />
          </label>
        </div>
      </div>
      <div className="button-text">
        <button type="button" id="nextBtn" onClick={(event) => handleStepIncrese(event, chosen)}>Next page</button>
        <p>Question 3 out of 4</p>
      </div>
    </>
  );
}

export default Question3;