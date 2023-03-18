import React from 'react';

export const Points = ({ points, setPoints }) => {
  const handlePoints = (event) => {
    setPoints(event.target.value);
  }
  return (
    <div className="bestthingbox">
      <h3><span>Nice to meet you! What is your overall impression of the site?</span></h3>
      <label htmlFor="terrible">
        <input
          id="terrible"
          type="radio"
          value="Terrible"
          onChange={handlePoints}
          checked={points === 'Terrible'} />
                Terrible!
      </label>
      <label htmlFor="alright">
        <input
          id="alright"
          type="radio"
          value="Its alright..."
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Its alright...'} />
                Its alright...
      </label>
      <label htmlFor="nice">
        <input
          id="nice"
          type="radio"
          value="Quite nice!"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Quite nice!'} />
                Quite nice!
      </label>
      <label htmlFor="awesome">
        <input
          id="awesome"
          type="radio"
          value="Awesome!"
          onChange={(event) => setPoints(event.target.value)}
          checked={points === 'Awesome!'} />
                Awesome!
      </label>
    </div>
  );
}