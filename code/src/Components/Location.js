/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../index.css';

export const Location = ({ location, setLocation }) => {
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  return (
    <form>
      <p>Where do you enjoy listening to music the most?</p>
      <label>
        <input
          type="radio"
          value="on the dancefloor"
          // eslint-disable-next-line arrow-parens
          onChange={handleLocationChange}
          checked={location === 'on the dancefloor'} />
        <span>On the dancefloor, sweating it out</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="at home"
          onChange={handleLocationChange}
          checked={location === 'at home'} />
        <span>At home, feeling comfy and chill</span>
      </label>
    </form>
  );
};