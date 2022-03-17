import React from "react";


const ProgressBar = ({questionNum}) => {
    return <div className='progress-bar' >
    <label> {questionNum === 6 ? 'completed' : `question ${questionNum}`} </label>
    <progress max='5' value={questionNum}></progress>
    </div>
}


export default ProgressBar;