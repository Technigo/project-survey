/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Food } from './Food';

export const Times = ({ times, setTimes }) => {
  const handleTime = (event) => {
    setTimes(event.target.value);
  }
  return (
    <form>
        How often do you eat?
      <label>
        <input
          type="radio"
          value="every-day"
          onChange={handleTime}
          checked={times === 'every-day'} />
          Every day
      </label>
      <label>
        <input
          type="radio"
          value="every-week"
          onChange={handleTime}
          checked={times === 'every-week'} />
          Every week
      </label>
      <label>
        <input
          type="radio"
          value="every-other-week"
          onChange={handleTime}
          checked={times === 'every-other-week'} />
          Every other week
      </label>
    </form>
  );
}

export default Times;