import React from 'react'

const personArray = ['Solo', 'partners', 'family', 'friends']

const TheChoice = ({
    personInput,
    onPersonInputChange,
    nextQuestion, 
    step,
    }) => {
    return(
        <main className='main-container choice'>
             <p>Question number: {step}</p>
            <h3 className='question-title'>How many are traveling??</h3>
            <form className='form-container'>
            {personArray.map((amount) => ( 
          <label htmlFor={amount} key={amount}>
           <input 
            id={amount}
            type="radio"
            value={amount}
            onChange= {onPersonInputChange}
            checked={amount === personInput}
           />
            {amount}
           </label>
          
       ))}
       <button className='next-btn' onClick={nextQuestion}>Next</button>
        </form>
       </main>
        );
    };

  

export default TheChoice;