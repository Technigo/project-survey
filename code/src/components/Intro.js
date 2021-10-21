import React from "react";

const Intro = ({ onStepChange }) => {

    return (    
    <div className="intro-section">
            <h1 className="survey-title">Christmas Survey</h1>
           <p>Thank you for spreading some of that Christmas spirit by filling out this survey.</p>
           <button onClick={onStepChange}>Start</button>
            <div class="time">
                <i class="fas fa-clock"></i>
                <p class="time-paragraph">Takes 1 min</p>
            </div>
    </div>
    );
};

export default Intro;