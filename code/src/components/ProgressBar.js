import React from 'react'

const ProgressBar = ({ step }) => {
    return <div className='progress-bar' >
    <label htmlFor='progress'> {step === 6 ? 'Finished!' : `Riddle ${step}/5`} </label>
    <progress 
    id='progress' 
    max='5' 
    value={step}>
    </progress>
    </div>
}

export default ProgressBar;
