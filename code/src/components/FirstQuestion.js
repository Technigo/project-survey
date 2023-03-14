import React from 'react';
import { Button } from 'components/button';

export const FirstQuestion = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
      </div>
      <label htmlFor="name">
        What is your name?
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
      <Button button="Next question" />
    </>
  );
}