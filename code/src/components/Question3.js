import React from 'react';

const Question3 = ({ question3, setQuestion3, handleStepIncrese }) => {
  const handleQuestion3Change = (event) => {
    setQuestion3(event.target.value)
  }

  return (
    <>
      <p className="question">What do you think again?</p>
      <div className="radioBtnContainer">
        <label htmlFor="one" className="radioBtn">One
          <input
            type="radio"
            id="one"
            value="one"
            checked={question3 === 'one'}
            onChange={(event) => handleQuestion3Change(event)} />
        </label>
        <label htmlFor="two" className="radioBtn">Two
          <input
            type="radio"
            id="two"
            value="two"
            checked={question3 === 'two'}
            onChange={(event) => handleQuestion3Change(event)} />
        </label>
        <label htmlFor="three" className="radioBtn">Three
          <input
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