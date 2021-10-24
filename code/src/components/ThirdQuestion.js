import React from 'react'

const ThirdQuestion = (props) => {
const {handleOnChange, onStepChange, selectedBeers, beer} = props

  return (
    <form className="form">
      <h3>Select Beer-types</h3>
      <ul>
        {beer.map((beerType, index) => (
          <li key={index}>
            <input
              id={`custom-checkbox-${index}`}
              type="checkbox"
              value={beerType}
              checked={selectedBeers[index].checked}
              onChange={() => handleOnChange(beerType)}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{beerType}</label>
          </li>
        ))}
      </ul>

      <div className="button-container">
        <button onClick={() => onStepChange(-1)} className="form-button bouncy">Go back</button>
        <button onClick={() => (
          selectedBeers.every((val) => val.checked === false ) ? onStepChange(2) : onStepChange(1)
          )} 
          className="form-button bouncy">
            Next question
          </button>
      </div>
        
    </form>
  )
}

export default ThirdQuestion