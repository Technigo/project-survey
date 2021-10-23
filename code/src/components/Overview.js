import React from 'react';

const Overview = ({
  genreChoice,
  bandChoice,
  seatChoice,
  arenaChoice,
  tickets,
  onStepGoBack,
  goBackToStart,
}) => {
  return (
    <form className="formContainer">
      <h1>Congratulations!</h1>
      <h2>Apparently you're into {genreChoice} so these were your choices!</h2>
      <p>You chose this venue: {arenaChoice}</p>
      <p>You chose this many tickets: {tickets}</p>
      <p>You chose this band: {bandChoice}</p>
      <p>You chose this seat: {seatChoice}</p>
      <p>Great! We will send you your tickets! Have fun!</p>
      <div className="buttonContainer">
        <button className="button" onClick={goBackToStart}>
          Go back to start
        </button>
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
      </div>
    </form>
  );
};

export default Overview;
