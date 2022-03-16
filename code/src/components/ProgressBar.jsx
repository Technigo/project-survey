import React from "react"

const ProgressBar = ({ step }) => {

  return (
      <div className="progress">
        <div className={`progress-value page-${step}`}></div>
      </div>
  )
}

export default ProgressBar
