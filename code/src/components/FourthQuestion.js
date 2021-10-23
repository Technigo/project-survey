import React from 'react'

const FourthQuestion = (props) => {
const {brewery, onBreweryChange, onFinalQuestion, onStepChange} = props

  return (
    <form className="form">
      <label  
        htmlFor="brewery's" 
        className="form-label">
          Pick your favorite brewery
      </label>

      <select 
        value={brewery} 
        onChange={onBreweryChange}
        id="brewery's">
          <option value="" disabled>Select your option</option>
          <option value="verdant" className="form-element">Verdant</option>
          <option value="apex" className="form-element">Apex</option>
          <option value="poppels" className="form-element">Poppels</option>
          <option value="heineken" className="form-element">Heineken</option>
      </select>
      
      <div className="button-container">
      <button onClick={() => onStepChange("back")} className="form-button bouncy">Go back</button>
        <button onClick={onFinalQuestion} className="form-button bouncy">See overview</button>
      </div>
    </form>
  )
}

export default FourthQuestion