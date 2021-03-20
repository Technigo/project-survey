import React from 'react';

const evaluationArray = ['yes', 'no', 'none of your business']

const Radio = ({evaluationRadioButton, onRadioButtonChange, buttonValue}) => {
    return(
            <div>
                <p>Have you filled out this weeks evaluation yet?</p>
                {evaluationArray.map((evaluation) =>
                <label htmlFor={buttonValue} key={evaluation} >
                        <input 
                            name="buttonValue"
                            id={buttonValue} 
                            value={buttonValue}
                            type="radio"
                            onChange={onRadioButtonChange}
                            required
                        />   
                    {evaluationRadioButton}
                {evaluation}</label>
                    )}
            </div>
    )
}

export default Radio;