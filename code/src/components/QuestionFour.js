import React from 'react'

const TravelArray = ['Yes', 'No']

export const QuestionFour = ({travelInput, ontravelInputChange, nextQuestion, previousQuestion, step}) => {
    return (
        <main className='main-container'>
             <button className='back-btn' onClick={previousQuestion}>Go back</button>
            <form>
            <p>Question {step} of 4</p>
            <h3 className='question-title'>Have you a travel booked for this year?</h3>
                {TravelArray.map ((travel) => (
                    <label htmlFor={travel} key={travel}>
                        <input 
                        id={travel}
                        type='radio'
                        value={travel}
                        onChange={ontravelInputChange}
                        checked={travel === travelInput}
                        />
                        {travel}
                    </label>
                ))}
                <button 
              className='next-btn' 
              disabled={travelInput === ''}
              onClick={nextQuestion}>
                    Next
                </button>
            </form>

        </main>
    )

}