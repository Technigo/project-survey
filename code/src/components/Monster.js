import React from 'react';
import './components.css';

export const Monster = ({ yourMonster, setYourMonster }) => {
  return (
    <>
      <p className="question">Which is your favorite kind of monster?</p>
      <form>
        <select
          className="select-menu"
          id="monsters"
          onChange={(event) => setYourMonster(event.target.value)}
          value={yourMonster}>
          <option value="" disabled>Select option </option>
          <option value="bogeyman">Bogeyman</option>
          <option value="demon">Demon</option>
          <option value="dragon">Dragon</option>
          <option value="ghost">Ghost</option>
          <option value="hydra">Hydra</option>
          <option value="troll">Troll</option>
          <option value="vampire">Vampire</option>
          <option value="werewolf">Werewolf</option>
          <option value="witch">Witch</option>
          <option value="wizard">Wizard</option>
          <option value="yeti">Yeti</option>
          <option value="zombie">Zombie</option>
        </select>
      </form>
    </>
  );
}