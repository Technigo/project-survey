import React from 'react';



const ProgressBar = ({currentSection}) => {
    const progressSections = ['question1','question2','question3','question4','question5','question6']
    // const setActive = () => {
    //     document.getElementById("section"{progressSection}).classList.add("progress-active")

    // }
    return (
    <div className="progress-container">
        {progressSections.map(progressSection => (
                <div className= {(currentSection === progressSection) ? "progress-section progress-active" : "progress-section"}></div>
                
            ))}

    </div>
    )
}

export default ProgressBar; 