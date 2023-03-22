/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Verb = ({ verb, setVerb }) => {
  const handleVerbChange = (event) => {
    setVerb(event.target.value);
  }
  return (
    <>
      <label className="form-label" htmlFor="verb">Pick a verb.</label>
      <input type="text" id="verb" name="verb" placeholder="any verb" minLength="1" value={verb} onChange={handleVerbChange} required="required" />
    </>
  );
}