import React from 'react'

const Survey = ({ name, dropdown, radio }) => {
  return (
    <div className="summary">
      <h3>Summary:</h3>
      <p>Hours: {name}</p>
      <p>Where: {dropdown}</p>
      <p>Feeling: {radio}</p>
    </div>
  )
}

export default Survey;