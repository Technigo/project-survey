import React from 'react';

const DropDownMenu = (props) => {
    return (
        <div>
            <label htmlFor="feel">
                How did you feel after you had finished the book?
            </label>
            <select
                id="feel"
                value={props.feeling}
                onChange={props.onFeelingChange}
            >
                <option value="">Choose a feeling:</option>
                <option value="sad">Sad</option>
                <option value="scared">Scared</option>
                <option value="happy">Happy</option>
                <option value="angry">Angry</option>
                <option value="satisfied">Satisfied</option>
                <option value="uplifted">Uplifted</option>
            </select>
        </div>
    )
}
export default DropDownMenu