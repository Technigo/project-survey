import React from 'react';
/* how do I make this work?*/

const ageGroup = ["0-18", "19-30", "30+"];

const RadioButton = ({ onRadioInputChange, onStepChange }) => {

    return (
        <form className="radiobutton-container">
            Age group:
            {ageGroup.map(group => (
                <label key={group}>
                    <input
                       type="radio" onClick={onStepChange}
                       value={group}
                       onChange={onRadioInputChange}
                       checked={ageGroup === group}
                    />
                  {group}
                </label>
            ))}
         </form>
    );
};

export default RadioButton;