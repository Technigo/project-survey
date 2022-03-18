import React from 'react'

export const QuestionFive = ({age, setAge, step, setStep}) => {

return (
    <div className='main'>
    <form className='form-container'>
    <h3 tabindex="0">Bird, fish or in between?</h3>
      <p tabindex="0">Age can be sensitive, let's talk about that, it will be fun! Do your company need a yongster, drinking energy drinks and playing games? Or are you after an old, tired man, not doing to much noise? Perhaps, someone in the middle, drinking energy drinks and still being tired? (#mum) </p>  
      <label> 
        <input 
        type="radio"
        value="18-35"
        onChange={event => setAge(event.target.value)}
        checked={age === "18-35"}
        /> 18-35 - Jiihaaa!
    </label>

    <label> 
        <input 
        type="radio"
        value="36-50"
        onChange={event => setAge(event.target.value)}
        checked={age === "36-50"}
        /> 36-50 - I saw on the news yesterday..
    </label>

    <label> 
        <input 
        type="radio"
        value="51-100"
        onChange={event => setAge(event.target.value)}
        checked={age === "51-100"}
        /> 51-100 - Zzz Zzz
    </label>
    <h4>Reay to find out, who will fit your firm perfectly?</h4>
    <span>
    <button className="button" onClick={() => setStep(step - 1)}><span>BACK </span></button>
    <button className="button" onClick={() => setStep(step + 1)}><span>TO YOUR NEXT CO-WORKER </span></button>
    </span>
</form>

</div>

)
}


