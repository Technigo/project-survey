import React from "react"

const StartingPage = ({ onSectionChangeForward }) => {

    return (
        <div className="question-wrapper">
            
            <h1 className="welcome-title">Welcome</h1>

            <button onClick={onSectionChangeForward}>Start</button>
       
        </div>
    )
}

export default StartingPage