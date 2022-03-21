import React from "react"

const FourthQuestion = (props) => {
    const {
        superpowerInput,
        onSuperpowerInputChange,
        onSectionChangeBackward,
        onSectionChangeForward
    } = props

    return (
        <div className="question-wrapper">

            <label className="page-title" htmlFor="stressInput">
                Let's talk about superpowers, which kind would you choose to have?
            </label>
           
            <div className="select-container">
                <select value={superpowerInput} onChange={onSuperpowerInputChange}> 
                    <option className="select-main" value="" disabled selected>Select option:</option>
                    <option value="the power to always plug the USB in correctly the first time">
                    The power to always plug the USB in correctly the first time
                    </option>
                    <option value="the ability to make hand shadow puppets in any shape">
                    The ability to make hand shadow puppets in any shape
                    </option>
                    <option value="the power to translate all languages">
                    The power to translate all languages
                    </option>
                    <option value="the ability to always win at rock paper scissors">
                    The ability to always win at rock paper scissors
                    </option>
                    <option value="the power to make anyone laugh at any time">
                    The power to make anyone laugh at any time
                    </option>
                    <option value="the power to write flawless code">
                    The power to write flawless code
                    </option>
                </select>
            </div>

            <div className="button-wrapper">
                <button onClick={onSectionChangeBackward}>Back</button>
                <button onClick={onSectionChangeForward}>Next</button>
            </div>
           
        </div>
    )
}

export default FourthQuestion