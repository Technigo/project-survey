import React from 'react';

const regionList = [
  'cool as a cucumber',
  'hot-headed'
]

export const Region = ({ region, setRegion }) => {
  return (
    <>
      <p>My closest friends say that I am:</p>
      {regionList.map((qualities) => (
        <label htmlFor="region-question" key={qualities}>
          <input
            id="region-question"
            type="radio"
            value={qualities}
            onChange={(event) => setRegion(event.target.value)}
            checked={region === qualities}
            aria-label={qualities} />
          {qualities}
        </label>
      ))}
      <div className="icon-wrapper">
        <img src="./assets/cold.png" alt="cold icon" />
        <img src="./assets/hot.png" alt="hot icon" />
      </div>
    </>
  )
}