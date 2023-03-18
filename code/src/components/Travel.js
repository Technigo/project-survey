/* eslint-disable linebreak-style */
import React from 'react';
import womanWithSuitcase from '../assets/woman-suitcase.png'

export const Travel = ({ travel, setTravel }) => {
  return (
    <>
      <img src={womanWithSuitcase} alt="A woman carrying a suitcase" />
      <h2 className="question">Do you have plans to travel within the next 6 months?</h2>
      <select
        className="travel-input"
        onChange={(event) => setTravel(event.target.value)}
        value={travel}>
        <option value="yes">Yes, I have plans to travel abroad.</option>
        <option value="yes">Yes, but only within my own country.</option>
        <option value="no">No, I do not have plans to travel within next 6 months</option>
      </select>
    </>
  )
}