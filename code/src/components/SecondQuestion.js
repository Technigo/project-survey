import React from 'react'

const budgetArray = ['0-5000 kr', '5000-10.000 kr', '10.000-20.000 kr', 'More']

    export const SecondQuestion = ({
        budgetInput, 
        onbudgetInputChange, 
        nextQuestion, 
        previousQuestion,
        step
    }) => {
    return (
        <main className='main-container'>
          <form className='form-container'> 
              <p className='question-number' tabIndex='0'>Question {step} of 4</p>
              <h3 className='question-title' tabIndex='0'>How much do you spend on travels per year? </h3>
              <div className='input-container'>
              {budgetArray.map((budget) => (
                  
                  <label className='radio-btn' htmlFor={budget} key={budget} tabIndex='0'>
                    <input
                    className='radio'
                      id={budget}
                       type='radio'
                       value={budget}
                       onChange={onbudgetInputChange}
                       checked={budget === budgetInput}
                       tabIndex='0'
                    />
                      {budget}

                  </label>
                  
              ))}
              </div>
          </form>
          <div className='btn-container'>
          <button 
             className='back-btn'
             aria-label='Go back' 
             onClick={previousQuestion}>
                 Go back
             </button>
          <button 
              className='next-btn' 
              disabled ={budgetInput === ''}
              onClick={nextQuestion}>
                    Next
                </button>
                </div>
        </main>
    )
}