/* eslint-disable linebreak-style */
import React from 'react';

export const LengthOfDating = ({ lengthOfDating, setLengthOfDating }) => {
  const handleLengthOfDatingChange = (event) => {
    setLengthOfDating(event.target.value);
  }

  const monthsOfDating = ['0-2 months', '2-5 months', '6+ months']

  return (
    <form>
      <h3>How long have you known your date?</h3>
      {monthsOfDating.map((group) => (
        <lable key={group}>
          <input
            className="allRadioButtons"
            type="radio"
            value={group}
            onChange={handleLengthOfDatingChange}
            checked={lengthOfDating === group} />
          {group}
        </lable>
      ))}
    </form>
  )
};