import React from 'react';

export const RadioOption = ({careerName, setRadio}) => {
    const onRadioChange = (e) => {
        console.log(`Radio ${e.target.value}`);
        setRadio(e.target.value);
    }
    
    return (
        <div className="form-components radio-options">
            <label tabIndex="0" htmlFor="{careerName}">{careerName}</label>
                <input
                    name="stack"
                    id={careerName}
                    value={careerName}
                    type="radio"
                    tabIndex="0"
                    aria-label="Choose a preferred career"
                />
        </div>
    );
};