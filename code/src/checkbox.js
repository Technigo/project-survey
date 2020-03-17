import React from "react";

export const Checkbox = (props) => {
    const { terms, setTerms } = props;

    return (
        <div className="checkbox">
            <label className="radio-container" >
                I agree to the terms and conditions of <span>Elsita & Alfredo</span>
                <input
                    type="checkbox"
                    checked={terms}
                    onChange={event => setTerms(event.target.checked)}
                    required
                />
                <span className="checkmark"></span>
            </label>
        </div>
    );
};