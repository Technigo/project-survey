import React from 'react';
import { Button } from 'components/Button';

export const Name = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
      </div>
      <div className="questions">
        What is your name?
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <Button button="Next question" />
    </>
  );
}