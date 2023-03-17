import React from 'react';
import NextButton from './NextButton';

const Welcome = ({ counter, setCounter }) => {
  return (
    <div className="textboxChild">
      <h2>Hello dear customer!</h2>
      <p>To proceed with the reclamation survey please click below</p>
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default Welcome;