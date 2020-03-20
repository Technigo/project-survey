import React from 'react'

export const Progress = (props) => {
  const { progress } = props

  return (
    <>
      <div className="progress-bar">
        <div className="filler" style={{ width: `${progress}%` }} ></div>
      </div>
    </>
  )
}








