/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Radiobutton.css';

export const Times = ({ times, setTimes, food }) => {
  const handleTime = (event) => {
    setTimes(event.target.value);
  }
  return (
    <div className="radiobutton">
      <form>
        <span>How often do you eat {food}? </span>
        <label>
          <input
            type="radio"
            value="every day"
            onChange={handleTime}
            checked={times === 'every day'} />
          Every day
        </label>
        <label>
          <input
            type="radio"
            value="every week"
            onChange={handleTime}
            checked={times === 'every week'} />
          Every week
        </label>
        <label>
          <input
            type="radio"
            value="every other week"
            onChange={handleTime}
            checked={times === 'every other week'} />
          Every other week
        </label>
        <label>
          <input
            type="radio"
            value="once a month"
            onChange={handleTime}
            checked={times === 'once a month'} />
          Every other week
        </label>
      </form>
    </div>
  );
}

export default Times;