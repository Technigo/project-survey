import React from 'react';

export const Place = ({ place, setPlace }) => {
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }
  return (
    <>
      <div className="question">
        <h2>Write a favourite place or a new place you would like to visit.</h2>
      </div>
      <div className="answer-input">
        <input type="text" value={place} onChange={handlePlaceChange} />
      </div>
    </>
)
}