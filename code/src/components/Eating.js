import React from 'react'

const eatingScale = ['1', '2', '3', '4', '5']

const Eating = ({food, onfoodChange, onStepChange, onBackstepChange}) => {

  return (
    <section className="question-container">
      <label htmlFor='food'>
        <h4>How would you rate:</h4>
        <h2>The standard of the food?</h2>
      </label>
      <div className="radio-toolbar">
        {eatingScale.map(taste => ( 
        <label key={taste} className="fixRating">
          <input
          type="radio"
          value={taste}
          onChange={onfoodChange}
          checked={food === taste}
          />
          <span className="colorRating"></span>
          {taste}
        </label>
        ))}
      </div>
      <div className="locationButtons">
        <button onClick={onBackstepChange}>Back</button>
        <button onClick={onStepChange} disabled={food===""}>Go!</button>
      </div>
    </section>
  )
}

export default Eating