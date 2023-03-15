import React from 'react';
import './SkiEquip.css';

export const SkiEquip = ({ skiEquip, setSkiEquip }) => {
  const handleSkiEquipChange = (event) => {
    setSkiEquip(event.target.value);
  }
  return (
    <>
      <p>Would you like to rent ski equipment?</p>
      <input
        type="text"
        onChange={handleSkiEquipChange}
        value={skiEquip}
        required />
    </>
  )
};