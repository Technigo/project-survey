import React from 'react'

const Result = ({ name, interval, favorite }) => {
  return (
    <div className='result-box'>
      <p>Thank you for sharing!</p>
      <p>So {name} you seem to have a craving for ice cream {interval} and your poison of choice is {favorite} taste </p>
    </div>
  )

}

export default Result;