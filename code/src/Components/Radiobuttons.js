/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../index.css';

export const Radiobuttons = () => {
  const [ageGroup, setAgeGroup] = useState()

  return (
    <form>
      <p className="questionTitle">Age group:</p>
      <label>
        <input
          type="radio"
          value="0-18"
          // eslint-disable-next-line arrow-parens
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === '0-18'} />
          0-18
      </label>
      <label>
        <input
          type="radio"
          value="19-30"
          onChange={(event) => setAgeGroup(event.target.value)}
          checked={ageGroup === '19-30'} />
          19-30
      </label>
      <label>
        <input
          type="radio"
          value="31-50"
          onChange={(event) => setAgeGroup(event.target.value)}
          checked={ageGroup === '31-50'} />
          31-50
      </label>
      <label>
        <input
          type="radio"
          value="51+"
          onChange={(event) => setAgeGroup(event.target.value)}
          checked={ageGroup === '51+'} />
      </label>
    </form>
  );
};