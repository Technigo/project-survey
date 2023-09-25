import React from 'react';

export const Colour = ({ colour, setColour, step }) => {
  return (
    <div className="content-container">
      <p className="p-step">Current step: {step} / 7</p>
      <h4> What&apos;s your favourite color?</h4>
      <form className="colourForm">
        <select
          onChange={(event) => setColour(event.target.value)}
          value={colour}
          aria-label="dropdown for your favourite colours">
          <option value="" disabled>Choose colour</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="orange">Blue</option>
        </select>
      </form>
    </div>
  )
}