import React from 'react'

export const Progress = (props) => {
  const { progress } = props

  return (
    <>
      <h2>You've done {progress}</h2>
      <div className="progress-bar">
        <div className="filler" style={{ width: `${progress}%` }} ></div>
      </div>
    </>
  )
}








