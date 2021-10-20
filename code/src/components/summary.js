import React from 'react'

const Summary = ({
  nameInput,
  preferenceInput,
  clothingInput,
  travelInput,
  eventsInput,
  emailInput,
  onStepChange,
}) => {
  return (
    <section>
      <h2>Your added info below</h2>
      <p>Full Name : {nameInput}</p>
      <p>Email : {emailInput}</p>
      <p>
        Content:
        {preferenceInput ? 'Surf' : ''} {clothingInput ? 'Clothing' : ''}{' '}
        {travelInput ? 'Travel' : ''} {eventsInput ? 'Events' : ''}
      </p>

      <button className="btn6" type="button" onClick={onStepChange}>
        {' '}
        Send it!{' '}
      </button>
    </section>
  )
}

export default Summary
