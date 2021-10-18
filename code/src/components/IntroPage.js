import React from 'react'

const IntroPage = ({ onStepChange }) => {
    return (
        <div>
            <h1 className="welcome-message">Welcome to my survey!</h1>
            <button type="button" onClick={onStepChange}>Start Survey!</button>
        </div>
    )

}

export default IntroPage