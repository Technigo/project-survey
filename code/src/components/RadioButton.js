import React from 'react';

const ageGroup = ["0-18", "19-30", "30+"];

const RadioButton = ({ onAgeInputChange, onStepChange }) => {

    return (
        <form className="radiobutton-container">
            <h2 className="radiobutton-heading">Age group:</h2>
            {ageGroup.map(group => (
                <label key={group}>
                    <input
                       type="radio" onClick={onStepChange}
                       value={group}
                       onChange={onAgeInputChange}
                       checked={ageGroup === group}
                    />
                  {group}
                </label>
            ))}
         </form>
    );
};

export default RadioButton;