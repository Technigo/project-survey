import React from 'react'

const budgetArray = ['0-5000 kr', '5000-10.000 kr', '10.000-20.000 kr', 'More']

    export const SecondQuestion = ({
        budgetInput, 
        onbudgetInputChange, 
        nextQuestion, 
        step
    }) => {
    return (
        <main className='main-container'>
          <form className='form-container'> 
              <p>Question number: {step} </p>
              <h3 className='question-title'>How much do you spend on travels per year? </h3>
              {budgetArray.map((budget) => (
                  <label htmlFor={budget} key={budget}>
                    <input
                      id={budget}
                       type='radio'
                       value={budget}
                       onChange={onbudgetInputChange}
                       checked={budget === budgetInput}
                    />
                      {budget}

                  </label>
              ))}
              <button 
              className='next-btn' 
              onClick={nextQuestion}>
                    Next
                </button>
          </form>
        </main>
    )
}