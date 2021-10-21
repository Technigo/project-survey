import React from 'react'

const Final = ({
  nameInput,
  preferenceInput,
  clothingInput,
  travelInput,
  eventsInput,
  emailInput,
  onStepChange,
}) => {
  return (
    <>
      <section className="submitted-container">
        <h2>Your added info below</h2>
        <h4>Full Name : {nameInput}</h4>
        <h4>Email : {emailInput}</h4>
        <h4>
          Prefered content :{preferenceInput ? 'Surf' : ''}{' '}
          {clothingInput ? 'Clothing' : ''} {travelInput ? 'Travel' : ''}{' '}
          {eventsInput ? 'Events' : ''}
        </h4>
      </section>
      <button className="btn6" type="button" onClick={onStepChange}>
        {' '}
        Click here to finish{' '}
      </button>
    </>
  )
}

export default Final
