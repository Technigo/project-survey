import React from 'react';

export const Place = ({ place, setPlace }) => {
  const handlePlaceChange = (event) => {
    setPlaceChange(event.target.value);
  }
  return (
    <>
    <div className="question">
      <p>Write a favourite place or somewhere you want to be right now.</p>
      </div>
      <input type="text" value={place} onChange={handlePlaceChange} />
    </>
)
}