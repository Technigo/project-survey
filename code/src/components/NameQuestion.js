import React from 'react'

const NameQuestion = ( {nameInput, onNameInputChange, onstepChange}) => {

    return (
        <form>
        <label htmlFor="nameInput">What is your name?</label>
          <input 
              id="nameInput"
              type="text" 
              value={nameInput} 
              onChange={onNameInputChange}
              /* ^ is another way of writing the following line: onChange={(event) => onNameInputChange(event)}*/
            />
        <button onClick = {onstepChange}>Next Question</button>
        </form>
    )
}
export default NameQuestion