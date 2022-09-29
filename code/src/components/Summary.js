import React from 'react';

const Summary = ({ nameWelcome, firstQuestion, closet }) => {
  return (
    <section className="section">
      <div className="content-wrap summary">
        <h1>{nameWelcome}, thank you for participating! 🍄</h1>
        <div className="summary-wrapper">
          <p>Your answers were: </p>
          <p>You eat meat {firstQuestion} 🍖</p>
          <p>Usually, you buy your clothes at {closet} 👗👖</p>
        </div>
        <button type="button" onClick={() => window.location.reload()} className="button button-summary">
        Start Again! ⭐
        </button>
      </div>
    </section>

  )
}

export default Summary;