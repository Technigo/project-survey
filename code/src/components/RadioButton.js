import React, { useEffect } from 'react';

const RadioButton = ({ 
    onAgeInputChange, 
    ageInput, 
    onStepChange
 }) => {

    return (
        <form>
            <label>
                hey
                <input
                   type="radio"
                   value="0-18"
                   onChange={() => onAgeInputChange('0-18')}
                   checked={ageInput === '0-18'}
                />
                0-18
                </label>

                <label>
                <input
                   type="radio"
                   value="19-30"
                   onChange={() => onAgeInputChange('19-30')}
                   checked={ageInput === '19-30'}
                />
                19-30
                </label>

                <label>
                <input
                   type="radio"
                   value="30+"
                   onChange={() => onAgeInputChange('30+')}
                   checked={ageInput === '30+'}
                />
                30+
               </label>

               <button className="previous-button" 
				   onClick={() => onStepChange('prev')}>Previous question
		  	   </button>
			
			   <button className="submit-button" 
			       disabled={ageInput === ''} 
				   onClick={() => onStepChange('next')}>Next question
			   </button>
         </form>
    );
};

export default RadioButton;