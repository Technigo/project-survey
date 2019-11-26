import React, { useState } from 'react'


const programingSkills = ["HTML/CSS", "JavaScript", "others"];
export const QuestionThree = () => {
    const [skills, setSkills] = useState();
    return (
        <form className="radio-form" onSubmit={event => event.preventDefault()}>

            <p>Experience in programming?</p>

            {programingSkills.map(skill => (

                <label key={skill}>
                    <input className="radio-circle"
                        type="radio"
                        value={skill}
                        onChange={event => setSkills(event.target.value)}
                        checked={skills === programingSkills}
                    />
                    {skill}
                </label>
            ))}
        </form>
    );
};













