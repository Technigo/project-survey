import React from 'react'

const Progressbar = ({ step }) => {
    return <div className='progress-bar' >
    <label htmlFor='progress'> {step === 6 ? 'completed' : `Question ${step}/5`} </label>
    <progress 
    id='progress' 
    tabIndex='-1' 
    max='5' 
    value={step}>
    </progress>
    </div>
}

export default Progressbar;