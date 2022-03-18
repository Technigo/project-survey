import React from 'react'

export const LinkQuestion = (props) => {
    const {step, linkInput, onLinkInputChange, onStepChange, onStepBackChange} = props
    const progress = (step/8)*100
    return(
        <div className="container">
            <label htmlFor="nameInput" className="labelStyle">Please give us a link, where we can see what you have done before</label>
            <input 
            id="linkInput"
            type="link" 
            value={linkInput} 
            placeholder="https://link-to-your-work.com"
            onChange={onLinkInputChange}/>
            
            <div className="buttons">
                <button className="button"
                    disabled={linkInput===''}
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