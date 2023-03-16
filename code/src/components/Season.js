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
        I am my best self in:
      {seasonList.map((seasons) => (
        <label htmlFor="season-question" key={seasons}>
          <input
            id="season-question"
            type="radio"
            value={seasons}
            onChange={(event) => setSeason(event.target.value)}
            checked={season === seasons} />
          {seasons}
        </label>
      ))}
    </>
  )
}