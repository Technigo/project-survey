import React from 'react'

const FavouriteColour = ({colourInput, onColourInputChange, onstepChange}) => {
    return (
        <div className ="container-bella">
          <img src="/assets/bella.jpg"></img>  
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
                <button className="button" onClick = {onstepChange}>Next Question</button>
            </form>
        </fieldset>  
        </div>
        
        
        
    )

}

export default FavouriteColour