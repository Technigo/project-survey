import React from 'react'

export const SecondQuestion = (props) => {
    const {surnameInput, onSurnameInputChange, onStepChange} = props
    return(
        <form>
            <label htmlFor="surnameInput">Type your surname</label>
            <input 
            id="surnameInput"
            type="text" 
            value={surnameInput} 
            onChange={onSurnameInputChange}/>
            <button onClick={onStepChange}>Next question</button>
        </form>
      )
} 