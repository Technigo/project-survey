import React from 'react'

const ProgressBar = ( {section} ) => {

  let progress = section * 20
  let percentage = progress / 100

  return (
    <div className="progress-container">
    <div className="progress-bar">
      <div style={{width: `${percentage * 200}}px`}} className="progress-fill">
        <p>{progress} %</p>
      </div>
    </div>
    </div>

  )

}

export default ProgressBar