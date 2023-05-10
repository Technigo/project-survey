/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Verb = ({ verb, setVerb }) => {
  const handleVerbChange = (event) => {
    setVerb(event.target.value);
  }
  return (
    <div className="choices-wrapper">
      <label className="input-label" htmlFor="pick-verb">Pick any verb.</label>
      <input type="text" id="pick-verb" name="pick-verb" placeholder="like swim, eat, run..." minLength="1" value={verb} onChange={handleVerbChange} required="required" />
    </div>
  );
}