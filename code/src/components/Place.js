import React from 'react';

export const Place = ({ place, setPlace }) => {
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }
  return (
    <>
      <div className="question">
        <h2>Were in the world would you like to be in your dream?</h2>
      </div>
      <div className="answer-input">
        <input type="text" value={place} onChange={handlePlaceChange} />
      </div>
    </>
  )
}