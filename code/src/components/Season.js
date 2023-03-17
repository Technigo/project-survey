import React from 'react';

const seasonList = [
  'spring',
  'summer',
  'autumn',
  'winter'
]

export const Season = ({ season, setSeason }) => {
  return (
    <>
      <p>I am my best self in:</p>
      {seasonList.map((seasons) => (
        <label htmlFor="season-question" key={seasons}>
          <input
            id="season-question"
            type="radio"
            value={seasons}
            onChange={(event) => setSeason(event.target.value)}
            checked={season === seasons}
            aria-label={seasons} />
          {seasons}
        </label>
      ))}
    </>
  )
}