import React from 'react';


const Summary = () => {

  return(
    <section className="summary-section">
      <h2 className="summary-header">Thank you for your time!</h2>
      <p className="summary-text">You read {} books in a year.</p>
      <p className="summary-text">Your favorite genre is {}.</p>
      <p className="summary-text">Your favoritebook is {}.</p>

    </section>
  )
};

export default Summary;