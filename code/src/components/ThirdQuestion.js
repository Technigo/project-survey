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
      {/* <label  
        className="form-label"
      >
        <input 
          id="lager" 
          type="checkbox" 
          value="lager"
          name="beer-type"
          checked={checkedState[0]} 
          onChange={() => handleOnChange(0)}
          className="form-element"
        />
          Lager
      </label>

      <label className="form-label">
        <input 
          id="ale" 
          type="checkbox" 
          value="ale"
          name="beer-type"
          checked={checkedState[1]} 
          onChange={() => handleOnChange(1)}
          className="form-element"
        />
          Ales (session ale, pale ale, india pale ale etc.)
      </label>

      <label className="form-label">
        <input 
          id="sour" 
          type="checkbox" 
          value="sour"
          name="beer-type"
          checked={checkedState[2]} 
          onChange={() => handleOnChange(2)}
          className="form-element"
        />
          Sour beer (spontaneously fermented (ex. lambic) and additional cultures (ex. kettle sour))
      </label>

      <label className="form-label">
        <input 
          id="porter-stout" 
          type="checkbox"
          value="porter-stout"
          name="beer-type"
          checked={checkedState[3]} 
          onChange={() => handleOnChange(3)}
          className="form-element"
        />
          Porter and stout
      </label> */}

      <div className="button-container">
        <button onClick={() => onStepChange("back")} className="form-button">Go back</button>
        <button onClick={() => onStepChange("next")} className="form-button">Next question</button>
      </div>
        
    </form>
  )
}

export default ThirdQuestion