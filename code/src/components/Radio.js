import React from 'react';

const evaluationArray = ['yes', 'no', 'none of your business']

const Radio = ({evaluationRadioButton, onRadioButtonChange}) => {
    return(
            <div>
                <p>Have you filled out this weeks evaluation yet?</p>
                {evaluationArray.map((evaluation) =>
                <label htmlFor={evaluationRadioButton} key={evaluationRadioButton} >
                        <input 
                            name="evaluation"
                            id={evaluationRadioButton} 
                            value={evaluationRadioButton}
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