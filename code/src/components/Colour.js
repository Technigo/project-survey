import React from 'react';

export const Colour = ({ colour, setColour, step }) => {
  return (
    <div className="colour-container">
      <p>Current step: {step} / 7</p>
      <h4> What&apos;s your favourite color?</h4>
      <form className="colourForm">
        <select
          onChange={(event) => setColour(event.target.value)}
          value={colour}>
          <option value="" disabled>Choose colour</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="Black">Black</option>
        </select>
      </form>
    </div>
  )
}