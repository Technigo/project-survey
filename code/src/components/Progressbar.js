
import React from 'react'

const Progressbar = ({ step }) => {
    return <div className='progress-stepbar'>
    <label htmlFor='progressStepbar'> <p> {`step ${step} of 6`}</p> </label> 
    <progress 
    id='progressBar' max='6' value={step}>
    </progress>
    </div>
}
export default Progressbar;

