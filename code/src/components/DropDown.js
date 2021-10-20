import React from 'react';
/* how do I use Onclick*/

/*Can't I make an array of locations?*/

/*const locationGroup = ["Stockholm", "Barcelona", "Oslo"]*/

    
const DropDown = ({ setLocationInput, location, onStepChange }) => {
    return (
        <form className="dropdown">
            <select
               onChange={setLocationInput}
               value={location}
            >
               <option value="**">Select location:</option>
               <option value="Stockholm">Stockholm</option>
               <option value="Barcelona">Barcelona</option>
               <option value="Oslo">Oslo</option>
            </select>

            <button className="submit-button" onClick={onStepChange}>See overview</button>
        </form>
    )
};

export default DropDown;