import React from "react"

const Intro = ({ onStepChange }) => {

    return (    
    <div className="intro-section">
        <h1 className="survey-title">ed<span className="alt-color">m</span>.</h1>
        <span className="survey-fancy"></span>
        <h1 className="survey-title-small"><span className="survey-fancy-3"></span>-SURVEY-<span className="survey-fancy-2"></span></h1>
        <p className="survey-description">Tell us more about what you like</p>
        <button onClick={onStepChange}>Start</button>
    </div>
    )
}
 
export default Intro