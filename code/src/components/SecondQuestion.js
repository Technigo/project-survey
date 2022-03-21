import React from "react"

const SecondQuestion = (props) => {
    const {
        nameInput,
        messageInput,
        onMessageInputChange,
        onSectionChangeBackward,
        onSectionChangeForward
    } = props

    return (
        <div className="question-wrapper">
            
            <label htmlFor="messageQuestion" className="page-title">
            Hey {nameInput}, go on and write yourself a positive message
            </label>

            <textarea
                id="messageInput"
                className="text-area"
                value={messageInput}
                onChange={onMessageInputChange}
                placeholder="words of encouragement, a compliment etc"
                rows="5"
            />

            <div className="button-wrapper">
                <button onClick={onSectionChangeBackward}>Back</button>
                <button onClick={onSectionChangeForward}>Next</button>
            </div>
           
        </div>
    )
}

export default SecondQuestion