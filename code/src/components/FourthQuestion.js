import React from "react"

export const FourthQuestion = ({viewInput, onViewInputChange, onStepChange, onPrevQuestionChange}) => {

    return (
        <div className="step-container">
            <h2 className="survey-text">Find a game based on your profile</h2>
        <h3>How do you prefer viewing the world?</h3>
        <select value={viewInput} onChange={onViewInputChange}>
            <option disabled value=''>Select something</option>
            <option value='From my own perspective'>From my own perspective</option>
            <option value='Watching from the outside'>Watching from the outside</option>
            <option value='By controlling others'>By controlling others</option>
        </select>
        <div className="button-wrapper">
        <button onClick={onPrevQuestionChange}>Previous question</button>
        <button className="next-question" onClick={onStepChange}>Next question</button>
        </div>
    </div>
    
    )
}


