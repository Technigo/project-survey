import React from 'react';
import { Button } from 'components/Button';

const concertPlaces = [
  'Indoor',
  'Outdoor'
]

export const ConcertPlace = ({ place, setPlace }) => {
  const handleConcertPlaces = (event) => {
    setPlace(event.target.value)
  }
  return (
    <>
      <div className="radioBtn">
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
      </div>
      <Button button="Next question" />
    </>
  );
}