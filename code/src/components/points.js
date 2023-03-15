import React from 'react';

export const Points = ({ setPoints }) => {
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
          checked={Points === 'One'} />
                Terrible!
      </label>
      <label>
        <input
          type="radio"
          value="Two"
          onChange={(event) => setPoints(event.target.value)}
          checked={Points === 'Two'} />
                Its alright...
      </label>
      <label>
        <input
          type="radio"
          value="Three"
          onChange={(event) => setPoints(event.target.value)}
          checked={Points === 'Three'} />
                Quite nice!
      </label>
      <label>
        <input
          type="radio"
          value="Four"
          onChange={(event) => setPoints(event.target.value)}
          checked={Points === 'Four'} />
                Awesome!
      </label>
    </div>
  );
}