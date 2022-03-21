import React from "react"

const StartingPage = ({ onSectionChangeForward }) => {

    return (
        <div className="question-wrapper">
            
            <section>
                <h1 className="welcome-title">Welcome</h1>
            </section>

            <button onClick={onSectionChangeForward}>Start</button>
       
        </div>
    )
}

export default StartingPage