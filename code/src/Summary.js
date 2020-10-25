import React from 'react';

export const Summary = (props) => {
  return (
    <section className="summary-section">
      <p className="summary-header">Thanks for your answers {props.answers[0]}, I can&apos;t wait to see you!</p>
      <p className="summary-text">Food preference: {props.answers[2]}</p>
      <p className="summary-text">Approximate arrival time: {props.answers[1]}</p>
      <p className="summary-text">Chosen color: <span className="chosen-color" style={{ backgroundColor: props.answers[3] }}>Nice choice!</span></p>
    </section>
  )
}