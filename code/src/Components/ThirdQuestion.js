import React from 'react'

const durationArray = ['day trip','one weekend','one week','two weeks']

const ThirdQuestion = ({
    awayInput, 
    onAwayInputChange,
    nextQuestion,
    step,
     }) => {

       return (  
        <main className='main-container time'>
       <form className='form-container'> 
       <p>Question number: {step}</p>
       <h3 className='question-title'>How long do you want to be away for?</h3>
       {durationArray.map((days) => ( 
          <label htmlFor={days} key={days}>
           <input 
            id={days}
            type="radio"
            value={days}
            onChange= {onAwayInputChange}
            checked={days === awayInput}
           />
            {days}
           </label>
          
       ))}
       <button className='next-btn' onClick={nextQuestion}>Next</button>
        </form>
       </main>
        );
    };

    export default ThirdQuestion;