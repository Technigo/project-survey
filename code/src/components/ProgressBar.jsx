import React from "react"

import '../styles/progress.css'


const ProgressBar = ({ step }) => {

  return (
      <div className="progress">
        <div className={`progress-value page-${step}`}></div>
      </div>
  )
}

export default ProgressBar
