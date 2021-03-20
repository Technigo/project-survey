import React from 'react';

const Radio = ({evaluationRadioButton, onRadioButtonChange}) => {
    return(
            <div>
                <p>Have you filled out this weeks evaluation yet?</p>
                <label htmlFor={evaluationRadioButton} key={evaluationRadioButton} >
                <input 
                    name="evaluationAnswer"
                    id={evaluationRadioButton} 
                    value={evaluationRadioButton}
                    type="radio"
                    onChange={onRadioButtonChange}
                />   
                {evaluationRadioButton}
                </label>
            </div>
    )
}

export default Radio;