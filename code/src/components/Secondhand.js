import React from 'react';

export const Secondhand = ({ secondHand, setSecondHand, step, setStep }) => {
  const handleSecondHandChange = (event) => {
    setSecondHand(event.target.value)
  }

  const goToNextQuestion = () => {
    setStep(step + 1);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      goToNextQuestion();
    }
  }

  return (
    <>
      <h1 className="survey-title">Sneaker Survey</h1>
      <h2>Please share your best site for finding sneakers second hand:</h2>
      <input
        className="input-text"
        type="text"
        value={secondHand}
        onKeyDown={handleKeyDown}
        onChange={handleSecondHandChange}
        placeholder="Type your answer here" />
    </>
  )
}
