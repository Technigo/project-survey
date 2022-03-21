import React from "react"

const FirstQuestion = ({ nameInput, onNameInputChange, onSectionChangeForward }) => {

    return (
        <div className="question-wrapper">

            <label className="page-title" htmlFor="nameInput">
                Hey friend, what's your name?
            </label>

            <input
                className="name-input"
                id="nameInput"
                type="text"
                value={nameInput}
                onChange={onNameInputChange}
            />

            <button onClick={onSectionChangeForward}>Next</button>
        </div>
    )
}

export default FirstQuestion