import React from 'react';


const StartScreen = ({ handleStepIncrease }) => {

  return (
    <section className="container">
        <div className="input-card">
            <h1>THE ACADEMY OF GREAT JOKES!</h1>
            <h2>Ready to apply?</h2>
        </div>
        <div className="button-card">
            <button type="button" onClick={handleStepIncrease}>Apply here</button>
        </div>
    </section>
  );
};

export default StartScreen;