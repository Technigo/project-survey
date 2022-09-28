import React from 'react';

const TheEnd = ({
  nameInput,
  brushInput,
  frequencyInput,
  checkboxGroup,
  flossInput,
  goalInput,
  requestInput
}) => {
  return (
    <section className="summary">
      <h3>Thank you {nameInput} for your participation</h3>
      <p>Here´s a summary of your answers, please check them</p>
      <span className="summary-text">
        You use a {brushInput} Toothbrush {frequencyInput}.
      </span>
      <span className="summary-text">
        If you floss?: {flossInput}
      </span>
      <span className="summary-text">
        Currently you expecience{checkboxGroup}
      </span>
      <span className="summary-text">
        Your goal is {goalInput}
      </span>
      <span className="summary-text">
        Special requests, if any: {requestInput}
      </span>
    </section>
  )
}
export default TheEnd