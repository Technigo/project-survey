import React from 'react';

export const Place = ({ place, setPlace }) => {
  const handlePlaceChange = (event) => {
    setPlaceChange(event.target.value);
  }
  return (
    <>
      <p>Wich place in the world do you wanna be at right now?</p>
      <input type="text" value={place} onChange={handlePlaceChange} />
    </>
)
}