import React from 'react';

const seats = ['Standing', 'Sitting', 'VIP-section'];

const FourthQuestion = ({
  seatChoice,
  onSeatChoiceSet,
  onStepChange
}) => {
  return (
    <form className="seat-choice">
      <h1>Where would you like to sit?</h1>
      <ul>
      {seats.map(
        (
          seat, index //iterating through each seat choice
        ) => (
          <label key={seat}>
            <input
              value={seat}
              onChange={onSeatChoiceSet}
              checked={seatChoice === seat}
              type="radio"
              id={seat}
            />
            {seat}
          </label>
        )
      )}
      </ul>
      <button className="button" onClick={onStepChange}>
        See overview
      </button>
    </form>
  );
};

export default FourthQuestion;
