import React from 'react'

const FifthQuestion = (props) => {
  const {nameInput, onStepChange} = props

  return (
  <div className="form">

    <div className="text-summary">
      <p className="p-text">Hey {nameInput}, are you sure you dont want any beers? In that case, it is probably better to get another advent calender. If you want to add a beer-type, please go back and make sure to pick at least one beer type.</p>
    </div>

    <button onClick={() => onStepChange(-2)} className="form-button bouncy">Go back</button>
  </div>
  )
}

export default FifthQuestion