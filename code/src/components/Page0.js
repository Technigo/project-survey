import React from 'react';
import NextButton from './Button';

const question0 = ({ counter, setCounter }) => {
  return (
    <div className="leftboxChild">
      <h2>Hello dear customer!</h2>
      <p>To proceed with the reclamation survey please click below</p>
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default question0;