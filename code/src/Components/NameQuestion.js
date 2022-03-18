import React from 'react'

export const NameQuestion = (props) => {
    const {nameInput, onNameInputChange, onStepChange} = props
    return(
        <div className="container">
            <label htmlFor="nameInput" className="labelStyle">Hi there, what is your name?</label>
            <input 
            id="nameInput"
            required
            type="text" 
            value={nameInput} 
            placeholder="Your name"
            onChange={onNameInputChange}/>
            
            <button 
                    className="nextBtn button"
                    disabled={nameInput===''}
                    onClick={onStepChange}
                    >Next <span className="arrow right"></span></button>
        </div>
      )
} 