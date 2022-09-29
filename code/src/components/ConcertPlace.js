import React from 'react';

const concertPlaces = [
  'Indoor',
  'Outdoor'
]

export const ConcertPlace = ({ place, setPlace }) => {
  const handleConcertPlaces = (event) => {
    setPlace(event.target.value)
  }
  return (
    <form>
      {concertPlaces.map((group) => (
        <label key={group} htmlFor="lang">
          <input
            type="radio"
            value={group}
            onChange={handleConcertPlaces}
            checked={place === group} />
          {group}
        </label>
      ))}
    </form>
  );
}