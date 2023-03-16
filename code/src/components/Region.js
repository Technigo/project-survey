import React from 'react';

const regionList = [
  'cool as a cucumber',
  'hot-headed'
]

export const Region = ({ region, setRegion }) => {
  return (
    <>
      My closest friends say that I am:
      {regionList.map((qualities) => (
        <label htmlFor="region-question" key={qualities}>
          <input
            id="region-question"
            type="radio"
            value={qualities}
            onChange={(event) => setRegion(event.target.value)}
            checked={region === qualities} />
          {qualities}
        </label>
      ))}
    </>
  )
}