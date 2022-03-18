import React from 'react'

export const LinkQuestion = (props) => {
    const {linkInput, onLinkInputChange, onStepChange, onStepBackChange} = props
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
        </div>
      )
} 