import React from 'react'

const travelWays = ['by train', 'by car', 'by plane', 'by bike']

const Travel = ({travelWay, ontravelWayChange, onStepChange, onBackstepChange}) => {

  return (
    <section className="question-container">
      <label htmlFor='travelWay'>
        <h2>How did you travel to our event?</h2>
      </label>
      <div className="radiobuttons">
        {travelWays.map(trip => ( 
        <label key={trip} className="fixRadio">
          <input
            type="radio"
            value={trip}
            onChange={ontravelWayChange}
            checked={travelWay === trip}
          />
          <span className="colorRadio"></span>
          {trip}
        </label>
        ))}
      </div>
      <div className="locationButtons">
        <button onClick={onBackstepChange}>Back</button>
        <button onClick={onStepChange} disabled={travelWay===""}>Go!</button>
      </div>
    </section>
  )
}

export default Travel