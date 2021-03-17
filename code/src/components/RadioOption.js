import React from 'react';

export const RadioOption = ({careerName, setRadio}) => {
    const onRadioChange = (e) => {
        console.log(`Radio ${e.target.value}`);
        setRadio(e.target.value);
    }
    
    return (
        <div className="form-components">
            <label htmlFor="{careerName}">{careerName}</label>
                <input
                name="stack"
                id={careerName}
                value={careerName}
                type="radio"
                onChange={onRadioChange}
                />
        </div>
    );
};