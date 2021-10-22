import React from 'react'

const FourthQuestion = (props) => {
const {flavour, onFlavourChange, onFinalQuestion, onStepChange} = props

  return (
    <form className="form">
      <label  
        htmlFor="flavours" 
        className="form-label">
          Pick your popcorn flavour
        </label>

        <select 
          value={flavour} 
          onChange={onFlavourChange}
          id="flavours">
            <option value="salty" className="form-element">salty</option>
            <option value="sweet" className="form-element">sweet</option>
            <option value="garlic" className="form-element">garlic</option>
            <option value="butter" className="form-element">butter</option>
        </select>
      
        <button onClick={() => onStepChange("back")} className="form-button">Go back</button>
      <button onClick={onFinalQuestion} className="form-button">See overview</button>
    </form>
  )
}

export default FourthQuestion