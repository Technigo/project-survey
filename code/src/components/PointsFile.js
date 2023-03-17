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
          value="Terrible"
          onChange={handlePoints}
          checked={points === 'Terrible'} />
                Terrible!
      </label>
      <label>
        <input
          type="radio"
          value="Its alright..."
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Its alright...'} />
                Its alright...
      </label>
      <label>
        <input
          type="radio"
          value="Quite nice!"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Quite nice!'} />
                Quite nice!
      </label>
      <label>
        <input
          type="radio"
          value="Awesome!"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Awesome!'} />
                Awesome!
      </label>
    </div>
  );
}