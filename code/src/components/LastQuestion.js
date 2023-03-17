import React from 'react';
import './components.css';

export const Monster = ({ yourMonster, setYourMonster }) => {
  return (
    <>
      <p className="question">What do you love to do the most?</p>
      <form>
        <select
          className="select-menu"
          id="monsters"
          onChange={(event) => setYourMonster(event.target.value)}
          value={yourMonster}>
          <option value="" disabled>Select option </option>
          <option value="music">Playing or listening to music</option>
          <option value="reading">Reading</option>
          <option value="food">Food</option>
          <option value="sports">Sports</option>
          <option value="arts-crafts">Doing arts and crafts</option>
          <option value="yeti">Yeti</option>
          <option value="movies-series">Watching movies/series</option>
          <option value="family-friends">Being with family and/or friends</option>
          <option value="partner">Being with my partner</option>
          <option value="outdoor">Being outdoors</option>
          <option value="animals">Being with animals</option>
          <option value="zombie">Zombie</option>
        </select>
      </form>
    </>
  );
}