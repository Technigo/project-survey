import React from 'react'

export const OfficeQuestion = (props) => {
    const {officeInput, onOfficeInputChange, onStepChange, onStepBackChange} = props
    return(
        <div className="container">
            <p className="labelStyle">Which one of our offices are you interested to work?</p>
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
        </div>
      )
} 