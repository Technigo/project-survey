import React from 'react'


export const Progress = ({ current, total }) => {
  return (
    <p className="progress">Question {current} of {total}</p>
  )
}