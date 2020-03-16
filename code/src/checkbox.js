import React, { useState } from "react";

export const Checkbox = () => {
    const [terms, setTerms] = useState("");

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