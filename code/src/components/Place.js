import React from 'react';

export const Place = ({ place, setPlace }) => {
  const handlePlaceChange = (event) => {
    setPlaceChange(event.target.value);
  }
  return (
    <>
    <div className="question">
      <p>Wich place in the world do you wanna be at right now?</p>
      </div>
      <input type="text" value={place} onChange={handlePlaceChange} />
    </>
)
}