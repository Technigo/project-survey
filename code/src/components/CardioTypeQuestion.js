import React from 'react'


const CardioTypeQuestion = ({
    cardioTypes,
	onCardioTypeChange,
	onStepChange,
 }) => {

    return (
        <form className="form radio">
          Wich kind of cardio you want to do?
          <label>
            <span className="radio-input">
              <input
                type="radio"
                value="MYOM"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'MYOM'}
              />
              <span className="radio-text">MYOM</span>
            </span>
          </label>
          <label>
            <span className="radio-input">
              <input
                type="radio"
                value="AMRAP"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'AMRAP'}
              />
              <span className="radio-text">AMRAP</span>
            </span>
          </label>
          <label>
            <span className="radio-input">
              <input
                type="radio"
                value="Straight Reps"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'Straight Reps'}
              />
              <span className="radio-text">STRAIGHT REPS</span>
            </span>
          </label>
          <button onClick={onStepChange}>Check your cardio!</button>
        </form>
      )
    }

    export default CardioTypeQuestion
	
   