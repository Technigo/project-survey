import React from 'react'

const ProgressBar = ({ progressTraker }) => {

  return (
    <div className="traker">
      <div className="progress-tracker">
        <span>{progressTraker} answered of 5 </span>
      </div>
    </div>
  )
}
export default ProgressBar;