import React from 'react';

const budgetArray = ['0-2000','2000-5000','5000-10000']


const SecondQuestion = ({
    budgetInput, 
    onBudgetInputChange,
    nextQuestion,
    step,
     }) => {

       return (  
        <main className='main-container budget'>
       <form className='form-container'> 
       <p>Question number: {step}</p>
       <h3 className='question-title'>Budget for the destination:</h3>
       {budgetArray.map((budget) => ( 
          <label htmlFor={budget} key={budget}>
           <input className='radiobutton'
            id={budget}
            type="radio"
            value={budget}
            onChange= {onBudgetInputChange}
            checked={budget === budgetInput}
           />
            {budget}
           </label>
          
       ))}
       <button className='next-btn' onClick={nextQuestion}>Next</button>
        </form>
       </main>
        );
    };

    export default SecondQuestion;