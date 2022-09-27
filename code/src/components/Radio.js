import React, { useState } from 'react';

const ageGroups = [
  '0-18',
  '19-30',
  '31+'
]

export const Radio = () => {
  const [ageGroup, setAgeGroup] = useState();

  return (
  /* <form>
      <label>
        <input
          type='radio'
          value='0-18'
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === '0-18'}
        />
        0-18
      </label>
      <label>
        <input
          type='radio'
          value='19-30'
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === '19-30'}
        />
        19-30
      </label>
      <label>
        <input
          type='radio'
          value='31+'
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === '31+'}
        />
        31+
      </label>
    </form> */

    // WITH MAP OR LOOP:
    <form>
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setAgeGroup(event.target.value)}
            checked={ageGroup === group} />
          {group}
        </label>
      ))}
    </form>
  );
}