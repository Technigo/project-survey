import React from 'react';

const Question3 = ({ question3, setQuestion3, handleStepIncrese }) => {
  const handleQuestion3Change = (event) => {
    setQuestion3(event.target.value)
  }

  return (
    <>
      <div className="radioBtnContainer">
        <p>What do you think again?</p>
        <label htmlFor="week-days" aria-label="One">
          <input
            className="radioBtn"
            type="radio"
            value="one"
            checked={question3 === 'one'}
            onChange={(event) => handleQuestion3Change(event)} />One
        </label>
        <label htmlFor="week-days" aria-label="Two">
          <input
            className="radioBtn"
            type="radio"
            value="two"
            checked={question3 === 'two'}
            onChange={(event) => handleQuestion3Change(event)} />Two
        </label>
        <label htmlFor="week-days" aria-label="Three">
          <input
            className="radioBtn"
            type="radio"
            value="three"
            checked={question3 === 'three'}
            onChange={(event) => handleQuestion3Change(event)} />Three
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