import React from "react";


const ProgressBar = ({questionNum}) => {
    return <footer className='progress-bar' >
    <label> {questionNum === 6 ? 'completed' : `question ${questionNum}/5`} </label>
    <progress max='5' value={questionNum}></progress>
    </footer>
}


export default ProgressBar;