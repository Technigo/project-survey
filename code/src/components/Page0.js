import React from 'react';
import NextButton from './Button';

const question0 = ({ counter, setCounter }) => {
  return (
    <div className="leftbox">
      <div className="leftboxChild">
        <h2>Hello dear customer!</h2>
        <p>To proceed with the reclamation survey please click below</p>
        <NextButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default question0;