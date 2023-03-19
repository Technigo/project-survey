import React from 'react';

const Intro = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="survey-wrapper">
      <h1><span>The Arthouse Cinema Generator</span></h1>
      <p>
        <span>Answer these questions to explore my handpicked favorites</span>
      </p>
      <button type="button" onClick={handleIncreaseCounterClick}>Start</button>
    </div>)
}

export default Intro