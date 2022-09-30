import React from 'react';

export const Welcome = ({ setCounter }) => {
  // Function for checking counter
  const handleStartButton = () => {
    setCounter(1);
  }

  return (
    <section className="main">
      <form className="form">
        <h2>Welcome to the FitOmeter!</h2>
        <p className="intro">As we all know, physical activity improves our health on ever level and at all stages in life.</p>
        <p className="intro"> But how do you know if you are getting enough?</p>
        <p className="intro"> Take the survey to find out</p>
        <button type="button" onClick={handleStartButton}>Start</button>
      </form>
    </section>
  );
}