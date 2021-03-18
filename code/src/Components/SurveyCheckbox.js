import React from 'react';

const SurveyCheckbox = (props) => {
    const {type2, setType2} = props;
    
    return (
        <form className="checkbox-form">
            <label>
                Object inspiration?
                <input className="checkbox-input"
                    type="checkbox"
                    value="want newsletter"
                    checked={type2 === "want newsletter"}
                    
                    onChange={event => setType2(event.target.value)}
                />
            </label>
        </form>
    )
}
export default SurveyCheckbox;