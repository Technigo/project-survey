import React from 'react';


const StartScreen = ({ handleStepIncrease }) => {

  return (
    <section className="container">
        <div className="input-card">
            <h1>Are you our next stand-up comedian?</h1>
            <h2>Take this test to find out </h2>
        </div>
        <div className="button-card">
            <button type="button" onClick={handleStepIncrease}>Pun-ch me</button>
        </div>
    </section>
  );
};

export default StartScreen;