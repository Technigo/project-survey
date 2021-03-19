import React from 'react'

import './ProgressBar.css'

export const ProgressBar = ({questionNumber}) => {
    return <div className="progress-bar">
        <div className={`progress-bar__inner ${questionNumber}`}></div>
    </div>
}