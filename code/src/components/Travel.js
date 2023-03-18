/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import womanWithSuitcase from '../assets/woman-suitcase.png'

// a component that shows a select menu (step 2)
export const Travel = ({ travel, setTravel }) => {
  return (
    <>
      <img src={womanWithSuitcase} alt="A woman carrying a suitcase" />
      <label className="question">Do you have plans to travel for a vacation within the next 6 months?
        <select
          className="travel-input"
          onChange={(event) => setTravel(event.target.value)}
          value={travel}>
          <option value="" selected disabled>Choose one...</option>
          <option value="yes">Yes, I have plans to travel abroad.</option>
          <option value="yes">Yes, I have plans to travel within my own country. </option>
          <option value="no">No, I don&apos;t have any plans to travel. </option>
        </select>
      </label>
    </>
  )
}