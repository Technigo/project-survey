/* eslint-disable linebreak-style */
import React from 'react';

export const Allergies = ({ allergies, setAllergies }) => {
  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
  }

  const anyAllergies = ['no allergies', 'nut allergy', 'probably no allergies']

  return (
    <div className="questionsContainer">
      <form>
        <h3>Has your date any allergies? </h3>
        {anyAllergies.map((group) => (
          <lable key={group}>
            <input
              className="allRadioButtons"
              type="radio"
              value={group}
              onChange={handleAllergiesChange}
              checked={allergies === group} />
            {group}
          </lable>
        ))}
      </form>
    </div>
  );
}