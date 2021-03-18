import React from 'react'

import './ProgressBar.css'

export const ProgressBar = ({nextQuestion}) => {
    return <div className="progress-bar">
        <div className={`progress-bar__inner ${nextQuestion}`}></div>
    </div>
}