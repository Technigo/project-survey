/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Points = ({ points, setPoints }) => {
  const handlePoints = (event) => {
    setPoints(event.target.value);
  }
  return (
    <div className="bestthingbox">
      <h3><span>Nice to meet you! What is your overall impression of the site?</span></h3>
      <label>
        <input
          type="radio"
          value="One"
          onChange={handlePoints}
          checked={points === 'One'} />
                Terrible!
      </label>
      <label>
        <input
          type="radio"
          value="Two"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Two'} />
                Its alright...
      </label>
      <label>
        <input
          type="radio"
          value="Three"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Three'} />
                Quite nice!
      </label>
      <label>
        <input
          type="radio"
          value="Four"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Four'} />
                Awesome!
      </label>
    </div>
  );
}