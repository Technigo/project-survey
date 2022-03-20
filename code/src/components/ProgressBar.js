import React from "react";


const ProgressBar = ({questionNum}) => {
    return <footer className='progress-bar' >
    <label htmlFor='progress'> {questionNum === 6 ? 'completed' : `question ${questionNum}/5`} </label>
    <progress 
    id='progress' 
    tabIndex='-1' 
    max='5' 
    value={questionNum}>
    </progress>
    </footer>
}


export default ProgressBar;