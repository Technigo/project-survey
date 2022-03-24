import React from 'react';


const Experience = ({ experienceInput, experienceChoosen }) => {
    const experiences = ["office only", "remote only", "both office and remote"];
    return (
        <div className="question-wrapper">
            <div className="question">
                <h2>What kind of experience do you have from working remotely?</h2>
                <p>I have worked from: </p>
                <div>
                    {experiences.map((experienceChoice, index) => (
                        <div className="option-container" key={index}>
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
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Experience;

