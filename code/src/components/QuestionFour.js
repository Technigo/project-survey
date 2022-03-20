import React from 'react'

const TravelArray = ['Yes', 'No']

export const QuestionFour = ({
    travelInput, 
    ontravelInputChange, 
    nextQuestion, 
    previousQuestion, 
    step
}) => {
    return (
        <main className='main-container'>
            <form className='form-container'>
            <p className='question-number'>Question {step} of 4</p>
            <h3 className='question-title'>Have you a travel booked for this year?</h3>
            <div className='input-container'>
                {TravelArray.map ((travel) => (
                    <label className='radio-btn' htmlFor={travel} key={travel}>
                        <input 
                        className='radio'
                        id={travel}
                        type='radio'
                        value={travel}
                        onChange={ontravelInputChange}
                        checked={travel === travelInput}
                        />
                        {travel}
                    </label>
                ))}
                </div>
                </form>
                <div className='btn-container'>
                <button 
             className='back-btn' 
             onClick={previousQuestion}>
                 Go back
             </button>
                <button 
              className='next-btn' 
              disabled={travelInput === ''}
              onClick={nextQuestion}>
                    Next
                </button>
                </div>
        </main>
    )

}