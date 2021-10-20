import React from 'react'

const NameQuestion = ( {nameInput, onNameInputChange, onstepChange}) => {

    return (
       
          <fieldset className="fieldset">
              <legend className="legend" >Questions by Bella + Bubbles</legend>
                <form className="form-container">
                    <label htmlFor="nameInput">What is your name?</label>
                    <input 
                        id="nameInput"
                        type="text" 
                        value={nameInput} 
                        onChange={onNameInputChange}
                       
                        />
                    <button onClick = {onstepChange}>Next Question</button>
                </form>
              
          </fieldset>
       
        
    )
}
export default NameQuestion