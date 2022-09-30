import React from 'react';

const StartingPage = ({ nextQ }) => {
  return (
    <section>
      <h1>What would you like in your mailbox regularly?</h1>
      <h2>Tell us what your ideal subscription box looks like,
        and start looking forward to getting the mail.
      </h2>
      <button type="button" onClick={nextQ} label="start">Start the unboxing</button>
    </section>
  )
}

export default StartingPage
