import React from "react";

const Weapon = ({ weapon, weaponChange, onStepChange }) => {

  return (
    <form className="location" onSubmit={onStepChange}>
      <select className="choice-boxes"
        onChange={weaponChange}
        value={weapon}
      >
        <option value=''>Select our weapon</option>
        <option value="axe">axe</option>
        <option value="bow and fire arrows">bow and fire arrows</option>
        <option value="bombs">bombs</option>
        <option value="laser gun">laser gun</option>
        <option value="horribly tuned instrument">horribly tuned instrument</option>
      </select>

      <button className="reveal-button" type="submit">Reveal ghost story</button>

    </form>
  );
}

export default  Weapon;
