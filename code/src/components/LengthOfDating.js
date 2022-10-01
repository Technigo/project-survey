/* eslint-disable linebreak-style */
import React from 'react';

export const LengthOfDating = ({ lengthOfDating, setLengthOfDating }) => {
  const handleLengthOfDatingChange = (event) => {
    setLengthOfDating(event.target.value);
  }

  const monthsOfDating = ['0-2 months', '2-5 months', '6+ months']

  return (
    <div className="questionsContainer">
      <form>
        <h3>How long have known your date?</h3>
        Length of dating:
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
    </div>
  )
};