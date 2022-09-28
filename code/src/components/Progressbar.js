import React from 'react'

const Progressbar = ({ step }) => {
    return <footer className='progress-bar' >
    <label htmlFor='progress'> {step === 6 ? 'completed' : `question ${step}/5`} </label>
    <progress 
    id='progress' 
    tabIndex='-1' 
    max='5' 
    value={step}>
    </progress>
    </footer>
}

export default Progressbar;