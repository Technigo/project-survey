import React from 'react';

const ageGroup = ["0-18", "19-30", "30+"];

const RadioButton = ({ 
    onAgeInputChange, 
    ageInput, 
    onStepChange
 }) => {

    return (
        <form>
            <div className="radiobutton-container">
            <h2 className="radiobutton-heading">Age group:</h2>
            {ageGroup.map(group => (
                <label key={group}>
                    <input
                       type="radio" 
                       value={group}
                       onChange={onAgeInputChange}
                       checked={ageGroup === group}
                    />
                  {group}
                </label>
            ))}
            <button className="submit-button" 
			    disabled={ageInput === ''}
				onClick={onStepChange}>Next question
			</button>
            </div>
         </form>
    );
};

export default RadioButton;