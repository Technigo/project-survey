/* eslint-disable linebreak-style */
import React from 'react';

export const Verb = ({ verb, setVerb }) => {
  const handleVerbChange = (event) => {
    setVerb(event.target.value);
  }
  return (
    <>
      <p>Please enter a verb.</p>
      <input type="text" minLength="1" value={verb} onChange={handleVerbChange} required="required" />
    </>
  );
}