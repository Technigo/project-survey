import React from 'react'

export const EmailQuestion = (props) => {
    const {emailInput, onEmailInputChange, onStepBackChange, onStepChange} = props
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
            
           
        </div>
      )
} 