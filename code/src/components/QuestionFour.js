import React from 'react'

const TravelArray = ['Yes', 'No']

export const QuestionFour = ({travelInput, ontravelInputChange, nextQuestion, step}) => {
    return (
        <main className='main-container'>
            <p>Question number: {step} </p>
            <h3 className='question-title'>Have you a travel booked for this year?</h3>
            <form>
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
              onClick={nextQuestion}>
                    Next
                </button>
            </form>

        </main>
    )

}