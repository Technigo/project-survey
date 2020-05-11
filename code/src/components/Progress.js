import React from 'react'
import './progress.css'

export const Progress = ({ progress, total }) => {
  const completed = Math.round(((progress - 1) / total) * 100)
  console.log(progress, total, completed)
  return (
    <div className="progressContainer">
      <div className="progress" style={{ width: completed + "%" }}></div>
    </div>
  )
}
