import React from 'react';
/* how do I use Onclick*/

/*Can't I make an array of locations?*/

/*const locationGroup = ["Stockholm", "Barcelona", "Oslo"]*/

    
const DropDown = ({ 
    locationInput, 
    setLocationInput, 
    onStepChange 
}) => {
    return (
        <form className="dropdown">
            <label>
                What is your location?
             <select
               value={locationInput}
               onChange={setLocationInput}
            >
               <option value="New York">New york</option>
               <option value="Stockholm">Stockholm</option>
               <option value="Barcelona">Barcelona</option>
               <option value="Oslo">Oslo</option>
             </select>
            </label>

            <button className="submit-button" 
	/* 		    disabled={locationInput === ''} */
				onClick={onStepChange}>Next question
			</button>
        </form>
    )
};

console.log()

export default DropDown;