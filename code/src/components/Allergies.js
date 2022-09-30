/* eslint-disable linebreak-style */
import React from 'react';

export const Allergies = ({ allergies, setAllergies }) => {
  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
  }

  const anyAllergies = ['no allergies', 'nut allery', 'proabably no allergies']

  return (
    <form>
      <h3>Has your date any allergies? </h3>
        Any allergies?
      {anyAllergies.map((group) => (
        <lable key={group}>
          <input
            type="radio"
            value={group}
            onChange={handleAllergiesChange}
            checked={allergies === group} />
          {group}
        </lable>
      ))}
    </form>
  );
}