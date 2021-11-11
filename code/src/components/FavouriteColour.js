import React from 'react'

const FavouriteColour = ({colourInput, onColourInputChange, onStepChange, onStepMinusChange}) => {
    return (
        <div className="container-bella">
          <img src="/assets/bella.jpg" alt="child who asked the question"/>
          <fieldset className="fieldset">
         <legend className="legend" >Questions by Bella + Bubbles</legend>
            <form className="form-container">
              <label className="label" htmlFor="colourInput">Which is your favourite colour?</label>
               <input 
                className="input"
                id="colourInput"
                type="text" 
                value={colourInput} 
                onChange={onColourInputChange}
                />
                <button className="button" onClick={onStepChange}>Next Question</button>
                <button className="button" onClick={onStepMinusChange}> Previous Question</button>
            </form>
        </fieldset>  
        </div>
        
        
        
    )

}

export default FavouriteColour