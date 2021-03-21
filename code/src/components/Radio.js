import React from 'react';

const Radio = ({onRadioButtonChange, buttonValue}) => {
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
                        {buttonValue}
                    </div>
            </label> 
        </div>
    )
}

export default Radio;