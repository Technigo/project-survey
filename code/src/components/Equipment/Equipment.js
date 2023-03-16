import React from 'react';
import './Equipment.css';

export const Equipment = ({ equipment, setEquipment }) => {
  const handleEquipChange = (event) => {
    console.log(event.target.value);
    setEquipment(event.target.value);
  };

  return (
    <>
      <p>What sport are you interested in renting equipment for?</p>
      <select
        name="equipment"
        id="equipment"
        onChange={handleEquipChange}
        value={equipment}
        required>
        <option value="" disabled selected>
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
