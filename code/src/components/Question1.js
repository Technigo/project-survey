import React, { useState } from 'react';

const Question1 = ({ name, setName, handleStepIncrese }) => {
  const [chosen, setChosen] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setChosen(true);
  }

  const checkKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      handleStepIncrese(event, chosen);
    }
  };

  return (
    <form>
      <label htmlFor="your-name" className="question-box">
        <p className="question">What is your name?</p>
        <input type="text" id="your-name" value={name} onChange={handleNameChange} onKeyDown={checkKeyPress} />
      </label>
      <div className="button-text">
        <button type="button" id="nextBtn" onClick={(event) => handleStepIncrese(event, chosen)}>Next page</button>
        <p>Question 1 out of 4</p>
      </div>
    </form>
  );
}

export default Question1;