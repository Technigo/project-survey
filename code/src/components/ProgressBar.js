import React from 'react';

//Returns a div per array value and add the class "progress-active" if the current question corresponds with its value 

const ProgressBar = ({currentSection}) => {
    const progressSections = ['question1','question2','question3','question4','question5','question6']

    return (
    <div className="progress-container">
        {progressSections.map(progressSection => (
                <div className= {(currentSection === progressSection) ? "progress-section progress-active" : "progress-section"}></div>
                
            ))}

    </div>
    )
}

export default ProgressBar; 