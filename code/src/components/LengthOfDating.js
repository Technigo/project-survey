import React from 'react';

export const LengthOfDating = ({ lengthOfDating, setLengthOfDating }) => {
  const handleLengthOfDatingChange = (event) => {
    setLengthOfDating(event.target.value);
  }

  const monthsOfDating = ['0-2 months', '2-5 months', '6+ months']

  return (
     <form>
      <h2>How long have known your date?</h2>
      Length of dating:
      {monthsOfDating.map(group => (
        <lable key = {group}>
          <input
            type="radio"
            value={group}
            onChange= {(event) => setLengthOfDating(event.target.value)}
            checked={lengthOfDating === group}
          />
          {group}
        </lable>
      ))}
    </form>
  )};