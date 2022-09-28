import React from 'react';

export const Welcome = ({ setCounter }) => {
  // Function for checking counter
  const handleStartButton = () => {
    setCounter(1);
  }

  return (
    <section className="main">
      <form>
        <h2>Welcome to the blabla survey.</h2>
        <h3>Press the button to start</h3>
        <button type="button" onClick={handleStartButton}>Start</button>
      </form>
    </section>
  );
}