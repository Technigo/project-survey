import React from 'react'

const startAgain = () => {
  document.location.href=''
}

const Result = ({ name, interval, favorite }) => {
  return (
  
    <div className='result-box'>
      <p className='p-result-box' tabIndex='0'>Thank you for sharing!</p>
      <p className='p-result-box-sum' tabIndex='0'>So {name} you seem to have a craving for ice cream {interval} and your poison of choice is {favorite}. Welcome to the Ice tribe! </p>
      <img className='ice-pic'src='./assets/icecreambox.jpg' alt='boxes of ice cream'/>
      <div className='again-btn-box'>
      <button className='again-btn'onClick={startAgain} tabIndex='0'>Start again</button>
      </div>
    </div>
  
  )

}

export default Result;