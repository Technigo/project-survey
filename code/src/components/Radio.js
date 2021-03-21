import React from 'react';

const Radio = ({evaluationRadioButton, onRadioButtonChange, buttonValue}) => {
    return(
        <div className="formelement">
            <label htmlFor={buttonValue} key={buttonValue} className="radiobuttonbox">
                    <input className="radiobutton"
                        name="buttonValue"
                        id={buttonValue} 
                        value={buttonValue}
                        type="radio"
                        onChange={onRadioButtonChange}
                        required/>

                    <div className="radiobutton-name">
                        {evaluationRadioButton}
                        {buttonValue}
                    </div>
            </label> 
        </div>
    )
}

export default Radio;