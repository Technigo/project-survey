import React from 'react';
import { Button } from 'components/Button';

export const Name = ({ name, setName, step, percentage }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
        <div className="progress-bar">
          <div className="progress-filler" style={{ width: `${percentage}%` }}>
            {percentage}%
          </div>
        </div>
      </div>
      <label htmlFor="name">
        First of all, what is your name?
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
      <Button button="Next question" />
    </>
  );
}