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
                value="myom"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'myom'}
              />
              <span className="radio-text">MYOM</span>
            </span>
          </label>
          <label>
            <span className="radio-input">
              <input
                type="radio"
                value="amrap"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'amrap'}
              />
              <span className="radio-text">AMRAP</span>
            </span>
          </label>
          <label>
            <span className="radio-input">
              <input
                type="radio"
                value="straight"
                onChange={onCardioTypeChange}
                checked={cardioTypes === 'straight'}
              />
              <span className="radio-text">STRAIGHT REPS</span>
            </span>
          </label>
          <button onClick={onStepChange}>Check your cardio!</button>
        </form>
      );
    };

    export default CardioTypeQuestion
	
   