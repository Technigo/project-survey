import React from 'react';



const Radio = ({evaluationRadioButton, onRadioButtonChange, buttonValue}) => {
    return(
            <div>

                
                <label htmlFor={buttonValue} key={buttonValue} >
                        <input 
                            name="buttonValue"
                            id={buttonValue} 
                            value={buttonValue}
                            type="radio"
                            onChange={onRadioButtonChange}
                            required
                        />   
                    {evaluationRadioButton}
                {buttonValue}</label>
                 
            </div>
    )
}

export default Radio;