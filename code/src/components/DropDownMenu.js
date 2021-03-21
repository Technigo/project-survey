import React from 'react';

const DropDownMenu = (props) => {
    return (
        <div className="dropdown-menu-container">
            <label className="text-input-label" htmlFor="feel">
                How did you feel after you had finished the book?
            </label>
            <select className="dropdown-menu"
                id="feel"
                value={props.feeling}
                onChange={props.onFeelingChange}
            >
                <option value="">Choose a feeling:</option>
                <option tabIndex="0" value="sad">Sad</option>
                <option tabIndex="0" value="scared">Scared</option>
                <option tabIndex="0" value="happy">Happy</option>
                <option tabIndex="0" value="angry">Angry</option>
                <option tabIndex="0" value="satisfied">Satisfied</option>
                <option value="uplifted">Uplifted</option>
            </select>
        </div>
    );
};
export default DropDownMenu;