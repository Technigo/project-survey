import React from 'react'

export const FirstQuestion = ({
    environmentInput,
    onEnvironmentInputChange,
    nextQuestion,
    previousQuestion,
    step
}) => {
    return (
        <main className='main-container'>
            <form className='form-container'>
                <p className='question-number' tabIndex='0'>Question {step} of 4</p>
                <label className='question-title' tabIndex='0'>
                    <h3>What kind of environment do you prefer?</h3>
                </label>
                <select
                    tabIndex='0'
                    className='dropdown'
                    onChange={onEnvironmentInputChange}
                    value={environmentInput}>
                    <option className='option' disabled value=''>
                        Select environment
                    </option>
                    <option className='option' value='city'>
                        City
                    </option>
                    <option className='option' value='nature'>
                        Nature
                    </option>
                    <option className='option' value='beach'>
                        Ocean
                    </option>
                </select>
            </form>
            <div className='btn-container'>
                <button className='back-btn' aria-label='Go back' onClick={previousQuestion}>
                    Go back
                </button>
                <button className='next-btn'
                    onClick={nextQuestion}>
                    Next
                </button>
            </div>
        </main>
    )
}