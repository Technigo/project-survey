import React from 'react'

export const ProgressCounter = ({ count, total }) => {

  return (
    <div className="progress-counter">
      {count <= 4 ? (<>{count} / {total}</>) : <span>Thank you!</span>}
    </div>
  )
}