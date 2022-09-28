import React from 'react';

const Summary = ({ nameWelcome, firstQuestion, secondQuestion, clothes }) => {
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>{nameWelcome}, thank you for participating!</h1>
        <p>Summary of your answers:</p>
        <p>You eat meat {firstQuestion}</p>
        <p>You main transport is {secondQuestion}</p>
        <p>Usually, you buy your clothes in {clothes}</p>
      </div>
      <button type="button" onClick={() => window.location.reload()} className="button">
        Start Again!
      </button>
    </section>

  )
}

export default Summary;