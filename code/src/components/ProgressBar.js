import React from 'react'

const ProgressBar = ({ counter, totalCount }) => {
  return (
    <div className="progress-bar">
      <div style={{ width: `${(counter / totalCount) * 100}%` }} />
    </div>
  )
}

export default ProgressBar

