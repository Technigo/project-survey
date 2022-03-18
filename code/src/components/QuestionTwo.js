import React from 'react'


export const QuestionTwo = ({personality, setPersonality, step, setStep}) => {


return (
    <div className='main'>
    <div className='form-container'>
    <h3 tabIndex="0">What personality do you like?</h3>
    <p tabIndex="0">You will hang out with this person almost every day, how will you cope?! Must be some really professional but fun and easy going too.</p>
    <form >
        <select className="form"
        onChange={event => setPersonality(event.target.value)}
        value={personality} > 
    <option value="">What kind of personality should you new colleague have?</option>
    <option value="Easy going">Easy going of course - we will see each other every day!</option>
    <option value="Positive">Positive! Don't cope with negative peeps..</option>
    <option value="Fun">Fun - I love to laugh at work!</option>
    <option value="Brave">Brave, someone that can stand up for their opinion.</option>
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