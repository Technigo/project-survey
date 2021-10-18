import React, {useState} from "react"

export const ThirdQuestion = ({socialInput, onSocialInputChange, onStepChange}) => {
    return (

        <div className="third-container">
            <h3>How are you socially?</h3>
            <select value={socialInput} onChange={onSocialInputChange}>
                <option disabled value=''>Select something</option>
                <option value='Forever alone'>Forever alone</option>
                <option value='Love to be in a group'>Love to be in a group</option>
                <option value='A few peeps is enough'>A few peeps is enough</option>
            </select>
            <button onClick={onStepChange}>Next question</button>
        </div>
    )
}