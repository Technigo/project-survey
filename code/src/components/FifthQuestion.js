import React from 'react';
import { Button } from 'components/button';

export const FifthQuestion = ({ dreamDestination, setDreamDestination, step }) => {
  const handleDreamDestination = (event) => {
    setDreamDestination(event.target.value)
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
      </div>
      <label htmlFor="dreamDestination">
        What is your dream destination?
        <input id="dreamDestination" type="text" value={dreamDestination} onChange={handleDreamDestination} required />
      </label>
      <Button button="Summary" />
    </>
  );
}