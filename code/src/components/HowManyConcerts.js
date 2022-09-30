import React from 'react';
import { Button } from 'components/Button';

export const HowManyConcerts = ({ name, numberOfConcerts, setNoConcerts, step, percentage }) => {
  const handleNumberOfConcerts = (event) => {
    setNoConcerts(event.target.value)
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
        <div className="progress-bar">
          <div className="progress-filler" style={{ width: `${percentage}%` }}>{percentage}%</div>
        </div>
      </div>
      <label htmlFor="noOfConcerts">
        Alright {name}, how many live concerts do you attend in a year?
        <select
          id="noOfConcerts"
          onChange={handleNumberOfConcerts}
          value={numberOfConcerts}
          required>
          <option value="">Select number:</option>
          <option value="0-2">0-2</option>
          <option value="3-5">3-5</option>
          <option value="5+">5+</option>
        </select>
      </label>
      <Button button="Next question" />
    </>
  );
}