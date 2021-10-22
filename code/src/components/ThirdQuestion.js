import React from 'react';

const seats = ['Standing', 'Sitting', 'VIP-section'];

const ThirdQuestion = ({seatChoice, onSeatChoiceSet, onStepChange, bandChoice, arenaChoice, tickets}) => {
  return (
    <form className="seat-choice" value={seatChoice} onClick={onSeatChoiceSet}>
      <h1>Where would you like to sit?</h1>

      {seats.map(
        (
          seat //iterating through each ticketType array
        ) => (
          <label key={seat}>
            <input
              value={seat}
              onChange={onSeatChoiceSet}
              checked={seatChoice === seat}
              type="checkbox"
              id={seat}
            />
            {seat}
          </label>
        )
      )}
      <button className="button" onClick={onStepChange}>See overview</button>
      <h2>This is what you picked this far:</h2>
      <p>Venue choice: {arenaChoice}</p>
      <p>You chose to get: {tickets} tickets</p>
      <p>Band choice: {bandChoice}</p>
    </form>
  );
};

export default ThirdQuestion;
