import React from 'react'

export const FirstQuestion = ({environmentInput, onEnvironmentInputChange, nextQuestion, previousQuestion, step}) => {
    return (
        <main className='main-container'>
            <button className='back-btn' onClick={previousQuestion}>Go back</button>
            <form className='form-container'>
                <p>Question {step} of 4</p>
                <label className='question-title'>
                    <h3>What kind of environment do you prefer?</h3>
                </label>
                <select onChange={onEnvironmentInputChange}
                value={environmentInput}>
                    <option disabled value=''>
                        Select environment
                    </option>
                    <option value='city'>
                        City
                    </option>
                    <option value='nature'>
                        Nature
                    </option>
                    <option value='beach'>
                        Ocean
                    </option>
                </select>
                <button className='next-btn' onClick={nextQuestion}>
                    Next
                </button>
            </form>
        </main>
    )
}