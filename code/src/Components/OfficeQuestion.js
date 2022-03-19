import React from 'react'

export const OfficeQuestion = (props) => {
    const {step, officeInput, onOfficeInputChange, onStepChange, onStepBackChange} = props
    const progress = (step/8)*100
    return(
        <div className="container">
            <p className="labelStyle">Which one of our officeswould you like to work?</p>
                <div className="offices">
                    <div>
                        <label className="radioBtnContainer">Helsinki
                            <input 
                            name={officeInput}
                            type="radio" 
                            value='Helsinki'
                            onChange={onOfficeInputChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="radioBtnContainer">Barcelona
                            <input 
                            name={officeInput}
                            type="radio" 
                            value='Barcelona'
                            onChange={onOfficeInputChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>      
                    <div>
                        <label className="radioBtnContainer">Remotely
                            <input 
                            name={officeInput}
                            type="radio" 
                            value='remotely'
                            onChange={onOfficeInputChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>  
                </div>

                <div className="buttons">
                <button className="button"
                    disabled={officeInput===''}
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