import React from 'react';

export const Hear = ({ hear, setHear }) => {
  const handleHearChange = (event) => {
    setHear(event.target.value);
  }
  return (
    <>
      <p>How did you hear about us?</p>
      <input type="text" value={hear} onChange={handleHearChange} />
    </>
  );
}