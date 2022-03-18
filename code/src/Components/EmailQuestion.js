import React from 'react'

export const EmailQuestion = (props) => {
    const {step, emailInput, onEmailInputChange, onStepBackChange, onStepChange} = props
    const progress = (step/8)*100
    return(
        <div className="container">

            <label htmlFor="emailInput" className="labelStyle">What is your email?</label>
            <input 
            id="emailInput"
            type="email" 
            value={emailInput} 
            placeholder="name@email.com"
            onChange={onEmailInputChange}/>
            
            <div className="buttons">
                <button className="button"
                    disabled={emailInput===''}
                    onClick={onStepChange}
                    >Next <span className="arrow right"></span></button>
                <button className="button"
                    onClick={onStepBackChange}
                    ><span className="arrow left"></span> Back</button>
            </div>
            <div className="progress-container">
                <div style={{width: `${progress}%`}} className="progress-value">
                </div>
            </div>
           
        </div>
      )
} 