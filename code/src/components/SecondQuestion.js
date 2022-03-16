import React from 'react'

const budgetArray = ['0-1000', '2000-5000', '5000-6000']

    export const SecondQuestion = ({budgetInput, onbudgetInputChange, nextQuestion, step}) => {
    return (
        <main className='main-container'>
          <form className='form-container'> 
              <p>Question number: {step}</p>
              <h3 className='question-title'>Budget per day</h3>
              {budgetArray.map((budget) => (
                  <label>
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