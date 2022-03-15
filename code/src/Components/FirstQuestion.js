import React from 'react'

export const FirstQuestion = (props) => {
    const {nameInput, onNameInputChange, emailInput, onEmailInputChange, onStepChange} = props
    return(
        <form>
            <label htmlFor="nameInput">Type your name</label>
            <input 
            id="nameInput"
            type="text" 
            value={nameInput} 
            required
            onChange={onNameInputChange}/>

            <label htmlFor="emailInput">Type your email</label>
            <input 
            id="emailInput"
            type="email" 
            value={emailInput} 
            required
            onChange={onEmailInputChange}/>
            
            <button onClick={onStepChange}>Next question</button>
        </form>
      )
} 