import React, { useState } from 'react'

export const QuestionFive = ({age, setAge, step, setStep}) => {

return (
    <div className='main'>
    <form className='form-container'>
      <p>What age do you prefere?</p>  
    <label> 
        <input 
        type="radio"
        value="18-35"
        onChange={event => setAge(event.target.value)}
        checked={age === "18-35"}
        /> 18-35
    </label>

    <label> 
        <input 
        type="radio"
        value="36-50"
        onChange={event => setAge(event.target.value)}
        checked={age === "36-50"}
        /> 36-50
    </label>

    <label> 
        <input 
        type="radio"
        value="51-100"
        onChange={event => setAge(event.target.value)}
        checked={age === "51-100"}
        /> 51-100
    </label> 
    <button className="button" onClick={() => setStep(step + 1)}> TO YOUR NEXT CO-WORKER -> </button>
</form>

</div>

)
}


