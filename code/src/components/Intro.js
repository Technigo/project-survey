import React from 'react';
import { Background } from './styles/Background';

const Intro = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }
  return (
    <Background counter={counter}>
      <div className="survey-wrapper">
        <h1>
          <span>The Arthouse Cinema Generator</span>
        </h1>
        <p>
          <span>Answer these questions to explore my handpicked favorites</span>
        </p>
        <button
          type="button"
          onClick={handleIncreaseCounterClick}
          tabIndex="0"
          aria-label="Start button">
            Start
        </button>
      </div>
    </Background>)
}

export default Intro