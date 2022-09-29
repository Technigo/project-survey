import React from 'react';

const Summary = ({ nameWelcome, firstQuestion, bus, closet }) => {
  return (
    <section className="section">
      <div className="content-wrap summary">
        <h1>{nameWelcome}, thank you for participating!</h1>
        <p>Your answer were: </p>
        <p>You eat meat {firstQuestion}</p>
        <p>You main transport is {bus.toString()}</p>
        <p>Usually, you buy your clothes in {closet}</p>
      </div>
      <button type="button" onClick={() => window.location.reload()} className="button-summary">
        Start Again!
      </button>
    </section>

  )
}

export default Summary;