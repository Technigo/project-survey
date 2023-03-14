import React from 'react';
import { Button } from 'components/Button';

export const DreamDestination = ({ dreamDestination, setDreamDestination, step }) => {
  const handleDreamDestination = (event) => {
    setDreamDestination(event.target.value)
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
      </div>
      <div className="questions">
        What is your dream destination?
        <input id="dreamDestination" type="text" value={dreamDestination} onChange={handleDreamDestination} required />
      </div>
      <Button button="Summary" />
    </>
  );
}