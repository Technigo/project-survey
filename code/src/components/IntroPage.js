import React from 'react'

const IntroPage = ({ onStepChange }) => {
    return (
        <div>
            <h1 className="welcome-message">Welcome to this survey!</h1>
            <button onClick={onStepChange}>Start Survey!</button>
        </div>
    )

}

export default IntroPage