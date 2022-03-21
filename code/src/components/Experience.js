import React from 'react';


const Experience = ({experienceInput, experienceChoosen}) => {
    const experiences = ["Both office and remote", "Only Office", "Only Remote"];
    return (
        <div>
             <h1>What kind of experience do you have from working remotely?</h1>
            {experiences.map((experienceChoice => (
            <label key={experienceChoice}>
            <input
                type="radio"
                value={experienceChoice}
                onChange={experienceChoosen}
                checked={experienceInput === experienceChoice}
             />
            {experienceChoice}
            </label>
         )))}
         </div>
    )
};
export default Experience;

