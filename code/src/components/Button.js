import React from 'react'


const Button = ({onChangeDirection, textDisplay}) => {
  return (
    <button 
      onClick={onChangeDirection} 
      className='button'
      type='button'>
        {textDisplay}
    </button>
  )
}

export default Button