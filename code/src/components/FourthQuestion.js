import React, {useState} from "react"

export const FourthQuestion = ({viewInput, onViewInputChange, onStepChange}) => {

    return (
        <div className="fourth-container">
        <h3>How do you prefer viewing the world?</h3>
        <select value={viewInput} onChange={onViewInputChange}>
            <option selected='selected' disabled>Select something</option>
            <option value='From my own perspective'>From my own perspective</option>
            <option value='Watching from the outside'>Watching from the outside</option>
            <option value='By controlling others'>By controlling others</option>
        </select>
        <button onClick={onStepChange}>Next Question</button>
    </div>
    
    )
}