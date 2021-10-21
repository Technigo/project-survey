import React from 'react';

    
const DropDown = ({ 
    locationInput, 
    onLocationInputChange,
    onStepChange 
}) => {
    return (
        <form className="dropdown">
            <label>
                What is your location?
             <select
               value={locationInput}
               onChange={onLocationInputChange}
            >
               <option value="New York">New york</option>
               <option value="Stockholm">Stockholm</option>
               <option value="Barcelona">Barcelona</option>
               <option value="Oslo">Oslo</option>
             </select>
            </label>

            <button className="submit-button" 
				onClick={() => onStepChange('prev')}>Previous question
			</button>

            <button className="submit-button" 
			    disabled={locationInput === ''}
				onClick={onStepChange}>Next question
			</button>
        </form>
    )
};

console.log()

export default DropDown;