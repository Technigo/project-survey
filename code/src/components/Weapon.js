import React from 'react';

export const Weapon = ({ weapon, setWeapon }) => {
  return (
    <form
      className="selectContainer"
      onSubmit={(event) => event.preventDefault()}>
      <section>
        <h1> <em>Weapon</em> of choice? </h1>
        <select
          className="select"
          onChange={(event) => setWeapon(event.target.value)}
          value={weapon}>
          <option value="">Select weapon</option>
          <option value="Axe">Axe</option>
          <option value="Bow">Bow</option>
          <option value="Musket">Musket</option>
          <option value="Sword">Sword</option>
          <option value="Ugly Teddy Bear">Ugly Teddy Bear</option>
        </select>
      </section>
    </form>
  );
}
