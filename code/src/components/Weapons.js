import React from 'react';

export const Weapon = ({ weapon, setWeapon }) => {
  return (
    <>
      <h1> Weapon of choice? </h1>
      <form>
        <select onChange={(event) => setWeapon(event.target.value)} value={weapon}>
          <option value="">Select weapon</option>
          <option value="Axe">Axe</option>
          <option value="Bow">Bow</option>
          <option value="Sword">Sword</option>
          <option value="Musket">Musket</option>
          <option value="Ugly Teddy Bear">Ugly Teddy Bear</option>
        </select>
      </form>
    </>
  );
}