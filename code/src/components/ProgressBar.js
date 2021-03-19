import React from 'react'

const ProgressBar = (props) => {
  return (
    <>
      <div className="progress-bar question-container">
        <div className="filler" style={{width: `${props.progress}%`}}>
        </div>
      </div>
    </>
  )
}

export default ProgressBar