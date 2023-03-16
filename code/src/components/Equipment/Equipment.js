import React from 'react';
import './Equipment.css';

export const Equipment = ({ setEquipment }) => {
  const handleEquipChange = (event) => {
    console.log(event.target.value);
    setEquipment(event.target.value);
  };

  return (
    <>
      <h2>What sport are you interested in renting equipment for?</h2>
      <select
        name="equipment"
        id="equipment"
        onChange={handleEquipChange}
        defaultValue="choose-sport"
        required>
        <option value="choose-sport" disabled>
          Choose a sport
        </option>
        <option value="skiing">Skiing</option>
        <option value="snowboarding">Snowboarding</option>
        <option value="bob-sleighing">Bob sleighing</option>
        <option value="snowshoeing">Snowshoeing</option>
      </select>
    </>
  );
};
