import React from 'react';

const seats = ['Standing', 'Sitting', 'VIP-section'];

const FourthQuestion = ({
  seatChoice,
  onSeatChoiceSet,
  onStepChange, onStepGoBack
}) => {
  return (
    <form className="formContainer">
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
      <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
    </form>
  );
};

export default FourthQuestion;
