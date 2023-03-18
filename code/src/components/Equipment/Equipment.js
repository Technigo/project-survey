import React from 'react';
import './Equipment.css';

export const Equipment = ({ setEquipment }) => {
  const handleEquipChange = (event) => {
    console.log(event.target.value);
    setEquipment(event.target.value);
  };

  const handleBlur = () => {
    const selectElement = document.getElementById('equipment');
    if (selectElement.value === 'choose-sport') {
      selectElement.setCustomValidity('Please select a sport');
    } else {
      selectElement.setCustomValidity('');
    }
  };

  const handleInvalid = (event) => {
    event.preventDefault();
  };

  return (
    <fieldset className="equipment-wrapper">
      <legend>What sport are you interested in renting equipment for?</legend>
      <select
        name="equipment"
        id="equipment"
        className="dropdown-equipment"
        onChange={handleEquipChange}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
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
    </fieldset>
  );
};
