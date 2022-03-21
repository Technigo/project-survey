import React from 'react'

const SecondQuestion = ({ onSetDestination, onStepChange }) => {
  const travelDestion = [
    'The Alps sking',
    'Bahamas on the beach',
    'New York for shoping',
    'Vancover for fishing',
    'The Moon',
  ]
  return (
    <>
      <section className="destination-container">
        <h2 className="section-heading">Where do u wanna go?</h2>
        {travelDestion.map((destination) => (
          <label className="radiobutton" key={destination}>
            <input
              type="radio"
              name="enjoy"
              value={destination}
              onChange={onSetDestination}
            />
            {destination}
          </label>
        ))}
      </section>
      <button className="button" type="submit" onClick={onStepChange}>
        Next question
      </button>
    </>
  )
}

export default SecondQuestion
