import React, {useState} from 'react'


export const QuestionTwo = ({personality, setPersonality, step, setStep}) => {


return (
    <div className='form-container'>
    <form >
        <select className="form"
        onChange={event => setPersonality(event.target.value)}
        value={personality} > 
    <option value="">What kind of personality should you new colleague have?</option>
    <option value="Easy going">Easy going of course - we will see each other every day!</option>
    <option value="Positive">Positive! Don't cope with negative peeps..</option>
    <option value="Fun">Fun, love to laugh at work!</option>
    <option value="Brave">Brave, someone that can stand up for their opinion.</option>
    </select>
    </form>
    <button className="button" onClick={() => setStep(step + 1)}>Next question</button>
    </div>
);

};