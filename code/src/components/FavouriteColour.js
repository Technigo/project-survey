import React from 'react'

const FavouriteColour = ({colourInput, onColourInputChange, onstepChange}) => {
    return (
        <form className="form-container">
        <label htmlFor="colourInput">Which is your favourite colour?</label>
          <input 
              id="colourInput"
              type="text" 
              value={colourInput} 
              onChange={onColourInputChange}
              
            />
        <button onClick = {onstepChange}>Next Question</button>
        </form>
        
    )

}

export default FavouriteColour