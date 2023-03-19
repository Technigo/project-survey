import React from 'react';

const Weapon = ({ weapon, onWeaponChange }) => {
  return (
    <section className="weapon-section" alt="weapon input">
      <h2>What is your weapon of choice?</h2>
      <input
        placeholder="Weapon of chosie"
        className="name-input"
        id="name"
        type="text"
        value={weapon}
        onChange={onWeaponChange} />
    </section>
  );
};

export default Weapon;
