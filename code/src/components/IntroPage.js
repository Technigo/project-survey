import React from 'react'

const IntroPage = ({ onStepChange }) => {
    return (
        <div className="welcome-message-container">
            <h1 className="welcome-message">Welcome to 4 random questions!</h1>
            <button className="start-survey-button" type="button" onClick={onStepChange}>Start</button>
        </div>
    )

}

export default IntroPage