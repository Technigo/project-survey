import React from 'react'


const CardioTypeQuestion = ({
    cardioTypes,
	onCardioTypeChange,
	onStepChange,
 }) => {

    return (
        <form className="form radio">
          <label>
          Wich kind of cardio you want to do?
            <span className="radio-input">
              <input
                type="radio"
                value="EMOM"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'EMOM'}
              />
              <span className="radio-text">EMOM</span>
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
          <button onClick={onStepChange}
          className="button">Check your cardio!</button>
        </form>
      )
    }

    export default CardioTypeQuestion
	
   