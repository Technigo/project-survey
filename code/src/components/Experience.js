import React from 'react';


const Experience = ({experienceInput, experienceChoosen}) => {
    const experiences = ["Both office and remote","OnlyOffice","OnlyRemote"];
    return (
        <div className="question-wrapper">
            <div className="question">
             <h1>What kind of experience do you have from working remotely?</h1>
                <div>
                    {experiences.map((experienceChoice => (
                        <div className="option-container">
                            <label key={experienceChoice}>
                                <input className="input"
                                    type="radio"
                                    value={experienceChoice}
                                    onChange={experienceChoosen}
                                    checked={experienceInput === experienceChoice}
                                />
                                {experienceChoice}
                            </label>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
};
export default Experience;

