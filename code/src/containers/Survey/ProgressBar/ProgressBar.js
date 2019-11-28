import React from 'react'

const ProgressBar = (props) => {
  const progress = ((props.actual < 0 ? 0 : props.actual) / props.final) * 100
  const progressStyle = {
    width: `${progress}%`
  }
  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={progressStyle} />
    </div>
  )
}

export default ProgressBar