import React from "react"

const Question3 = ({ djInput, onDjInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label htmlFor="djInput">3. Favorite DJ? (and why is it Steve Angello)</label>
            <input 
                id="djInput" 
                type="text" 
                value={djInput} 
                onChange={onDjInputChange}
                placeholder="Type your answer here"
            />

            <button onClick={onStepChange}>Next</button>
        </form>
    )
}

export default Question3