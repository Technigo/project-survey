import React, { useState } from 'react'

export const QuestionThree = ({experience, setExperience, step, setStep}) => {

return (
    <>
    <form>
        <select 
        onChange={event => setExperience(event.target.value)}
        value={experience} > 
    <option value="">What experience do you see in you new co-worker?</option>
    <option value="Ability to work together">Experience of working in a team! We do that all the time...</option>
    <option value="Responsibility">That she had and handled a lot of responsibility!</option>
    <option value="Problem solver">There is problems here and there, so a backgorund in problem solving had been nice.</option>
    <option value="Customers contact">Or customers are everthing, but can be a little hard to handle sometimes! So some customers care experices is allways good. </option>
    </select>
    </form>
    <button onClick={() => setStep(step + 1)}>Next question</button>
    </>
);

};