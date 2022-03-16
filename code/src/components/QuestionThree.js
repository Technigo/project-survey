import React, { useState } from 'react'

export const QuestionThree = ({experience, setExperience, step, setStep}) => {

return (
    <div className='form-container'>
    <form >
        <select className="form"
        onChange={event => setExperience(event.target.value)}
        value={experience} > 
    <option value="">What experience do you see in you new co-worker?</option>
    <option value="Ability to work together">Experience of working in a team! We do that all the time...</option>
    <option value="Responsibility">That she handled a lot of responsibility!</option>
    <option value="Problem solver">There is problems here and there, so a backgorund in problem solving had been nice.</option>
    <option value="Customers contact">We do have som customers, so some customers care experices is allways good.</option>
    </select>
    </form>
    <button className="button" onClick={() => setStep(step + 1)}>Next question</button>
    </div>
);

};