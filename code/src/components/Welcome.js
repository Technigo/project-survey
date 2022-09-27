import React from 'react';

export const Welcome = ({ setCounter }) => {
  // Function for checking counter
  const handleStartButton = () => {
    setCounter(1);
  }

  return (
    <section className="main">
      <h3>Welcome to the blabla survey. Press the button to start</h3>
      <button type="button" onClick={handleStartButton}>Start</button>
    </section>
  );
}