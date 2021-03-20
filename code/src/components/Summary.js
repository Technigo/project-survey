/* eslint-disable linebreak-style */
import React from 'react'

const Summary = ({ fname, lname, gender, anamnes, checkboxGroup }) => {
  return (

    <div>
      <h1 className="underscore">Summary:</h1>
      <h2>{fname} {lname}</h2>
      <h3>Gender: {gender}</h3>
      <h3>In the past 6 months I {anamnes}</h3>
      <h3>Currently I feel {checkboxGroup.join(', ')}</h3>
    </div>
  )
}

export default Summary