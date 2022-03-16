import React from 'react'

const budget = ['0-1000', '2000-5000', '5000-6000']

    export const SecondQuestion = ({budgetInput, onbudgetInputChange, nextQuestion, step}) => {
    return (
        <main className='main-container'>
          <form className='form-container'> 
              <p>Question number: {step}</p>
              <h3 className='question-title'>Budget per day</h3>
              {budget.map((budget) => (
                  <>
                  <label>
                    <input
                      id={budget}
                       type='radio'
                       value={budget}
                       checked ={budget === budgetInput}
                       onChange={onbudgetInputChange}
                    />
                      {budget}

                  </label>
                  </>
              ))}
          </form>

        </main>
    )
}