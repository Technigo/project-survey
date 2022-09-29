import React from 'react';

const Question3 = ({ question3, setQuestion3, handleStepIncrese }) => {
  const handleQuestion3Change = (event) => {
    setQuestion3(event.target.value)
  }

  return (
    <>
      <div className="radioBtnContainer">
        <p>What do you think again?</p>
        <label htmlFor="one">
          One

          <input
            className="radioBtn"
            type="radio"
            id="one"
            value="one"
            checked={question3 === 'one'}
            onChange={(event) => handleQuestion3Change(event)} />
        </label>
        <label htmlFor="two">Two
          <input
            className="radioBtn"
            type="radio"
            id="two"
            value="two"
            checked={question3 === 'two'}
            onChange={(event) => handleQuestion3Change(event)} />
        </label>
        <label htmlFor="three">Three
          <input
            className="radioBtn"
            type="radio"
            id="three"
            value="three"
            checked={question3 === 'three'}
            onChange={(event) => handleQuestion3Change(event)} />
        </label>
      </div>
      <div>
        <button type="button" id="nextBtn" onClick={handleStepIncrese}>Next page</button>
        <p>Question 3 out of 4</p>
      </div>
    </>
  );
}

export default Question3;