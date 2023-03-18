import React from 'react';
import { Button } from 'components/button';

export const FifthQuestion = ({ dreamDestination, setDreamDestination }) => {
  const handleDreamDestination = (event) => {
    setDreamDestination(event.target.value)
  }
  return (
    <>
      <label htmlFor="dreamDestination">
        What is your dream destination?
        <input id="dreamDestination" type="text" value={dreamDestination} onChange={handleDreamDestination} required />
      </label>
      <Button button="Summary" />
    </>
  );
}