import React from 'react'

const Result = ({ name, interval, favorite }) => {
  return (
  
    <div className='result-box'>
      <p className='p-result-box'>Thank you for sharing!</p>
      <p className='p-result-box-sum'>So {name} you seem to have a craving for ice cream {interval} and your poison of choice is {favorite}. Welcome to the Ice tribe! </p>
      <img className='ice-pic'src='./assets/icecreambox.jpg'/>
    </div>
  
  )

}

export default Result;