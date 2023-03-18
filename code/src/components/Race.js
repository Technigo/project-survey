import React from 'react';

const RaceGroup = ({ onRaceChange, raceGroup }) => {
  const raceGroups = ['Elf', 'Dwarf', 'Orc', 'Human', 'Halfling'];

  return (
    <>
      <h2 className="race-container" alt="race input">
        What race are you?
      </h2>
      <div className="race-input">
        {raceGroups.map((group) => (
          <label key={group} htmlFor={group} className="label-container">
            <input
              id={group}
              name="group"
              type="radio"
              value={group}
              required
              onChange={onRaceChange}
              checked={raceGroup === group} />
            {group}
          </label>
        ))}
      </div>
    </>
  );
};

export default RaceGroup;
