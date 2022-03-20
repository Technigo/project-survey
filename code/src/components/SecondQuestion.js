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
        {travelDestion.map((item) => (
          <label className="likes" key={item}>
            <input
              type="radio"
              name="enjoy"
              value={item}
              onChange={onSetDestination}
            />
            {item}
          </label>
        ))}
      </section>
      <button className="button" type="button" onClick={onStepChange}>
        Next question
      </button>
    </>
  )
}

export default SecondQuestion
