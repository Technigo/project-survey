import React from "react"
import './text.css'

const Text = ({
    nameInput,
    onNameInputChange,
    onStepChange
}) => {
    return (
        <form>
            <div className="question-container">
                <label className="question-heading" htmlFor="nameInput">What is your name, stranger?<sup> *</sup></label>
                <p>Just your first one is fine. Or a nickname.</p>
                <div className="element-container">
                    <input
                        className="text-input"
                        id="nameInput"
                        type="text"
                        placeholder="Type your name here..."
                        autoComplete="off"
                        value={nameInput}
                        onChange={onNameInputChange}
                    />
                    <button className="btn"
                    disabled={nameInput === ''}
                    onClick={onStepChange}>ok ✓
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Text