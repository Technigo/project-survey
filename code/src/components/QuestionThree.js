import React from 'react'

export const QuestionThree = ({experience, setExperience, step, setStep}) => {

return (
    <div className='main'>
    <div className='form-container'>
    <h3 tabIndex="0">What stuff can be good to have in the backpack?</h3>   
    <p tabIndex="0">Experience can be important and make the job a bit easier but it's not all. In the right environment even a cactus can bloom! What kind of backgroud do you see in you nex mate? A team-buddy? Someone taking care of the grumpy customers? You tell me!</p>
    <form >
        <select className="form"
        onChange={event => setExperience(event.target.value)}
        value={experience} > 
    <option value="">What experience do you see in you new co-worker?</option>
    <option value="Ability to work together">Experience of working in a team! We do that all the time.</option>
    <option value="Responsibility">That she/he handled a lot of responsibility!</option>
    <option value="Problem solver">A backgorund in problem solving had been nice.</option>
    <option value="Customers contact">Some customers care experices is allways good.</option>
    </select>
    </form>
    <span>
    <button className="button" onClick={() => setStep(step - 1)}><span>BACK </span></button>    
    <button className="button" onClick={() => setStep(step + 1)}><span>NEXT </span></button>
     </span>
    </div>
    </div>
);

};