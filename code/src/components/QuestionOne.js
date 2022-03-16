import React from 'react'

export const FirstQuestion = ({environmentInput, onEnvironmentInputChange, nextQuestion, step}) => {
    return (
        <main className='main-container'>
            <form className='form-container'>
                <p>Question number: {step} </p>
                <label className='question-title'>
                    <h3>What kind of environment do you prefer?</h3>
                </label>
                <select onChange={onEnvironmentInputChange}
                value={environmentInput}>
                    <option value=''>
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