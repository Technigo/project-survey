import React, { useState } from 'react';

const Question2 = ({ question2, setQuestion2, handleStepIncrese }) => {
  const [chosen, setChosen] = useState(false);

  const handleQuestion2Change = (event) => {
    setQuestion2([...question2, event.target.value]);
    setChosen(true);
  }

  return (
    <>
      <div className="question-box">
        <p className="question">What are you doing today?</p>
        <label htmlFor="workday">
          <input
            className="label-box"
            name={question2}
            type="checkbox"
            id="workday"
            value="working"
            onChange={(event) => handleQuestion2Change(event)} />
            I am working
        </label>
        <label htmlFor="schoolday">
          <input
            className="label-box"
            name={question2}
            type="checkbox"
            id="schoolday"
            value="studying"
            onChange={(event) => handleQuestion2Change(event)} />
            I am studying
        </label>
        <label htmlFor="day-off">
          <input
            className="label-box"
            name={question2}
            type="checkbox"
            id="day-off"
            value="slacking"
            onChange={(event) => handleQuestion2Change(event)} />
            I am having a day off
        </label>
        <label htmlFor="sickday">
          <input
            className="label-box"
            name={question2}
            type="checkbox"
            id="sickday"
            value="beeing sick"
            onChange={(event) => handleQuestion2Change(event)} />
            I am sick
        </label>
      </div>
      <div>
        <button type="button" id="nextBtn" onClick={(event) => handleStepIncrese(event, chosen)}>Next page</button>
        <p>Question 2 out of 4</p>
      </div>
    </>
  );
}

export default Question2;