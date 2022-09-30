import React from 'react';
import { Button } from 'components/Button';

const concertPlaces = [
  'indoor',
  'outdoor'
]

export const ConcertPlace = ({ place, setPlace, step }) => {
  const handleConcertPlaces = (event) => {
    setPlace(event.target.value)
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
      </div>
      <div className="radioBtn">
        <p>What do you prefer when attending a concert?</p>
        {concertPlaces.map((group) => (
          <label key={group} htmlFor="lang">
            <input
              type="radio"
              id={group}
              value={group}
              onChange={handleConcertPlaces}
              checked={place === group}
              name={concertPlaces}
              required />
            {group}
          </label>
        ))}
      </div>
      <Button button="Next question" />
    </>
  );
}