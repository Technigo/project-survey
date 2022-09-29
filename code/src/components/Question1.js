import React from 'react';

const Question1 = ({ name, setName, handleStepIncrese }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const checkKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      handleStepIncrese();
    }
  };

  return (
    <>
      <div>
        <p>What is your name?</p>
        <input type="text" value={name} onChange={handleNameChange} onKeyDown={checkKeyPress} />
      </div>
      <div>
        <button type="button" id="nextBtn" onClick={handleStepIncrese}>Next page</button>
        <p>Question 1 out of 4</p>
      </div>
    </>
  );
}

export default Question1;