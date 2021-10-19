import React from 'react'

const FavouriteColour = ({colourInput, onColourInputChange, onstepChange}) => {
    return (
        <form>
        <label htmlFor="colourInput">Which is your favourite colour?</label>
          <input 
              id="colourInput"
              type="text" 
              value={colourInput} 
              onChange={onColourInputChange}
              /* ^ is another way of writing the following line: onChange={(event) => onNameInputChange(event)}*/
            />
        <button onClick = {onstepChange}>Next Question</button>
        </form>
        
    )

}

export default FavouriteColour