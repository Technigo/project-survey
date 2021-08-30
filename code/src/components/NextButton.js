import React from 'react'

const NextButton = ({ isChecked }) => {
    


  return (
    <button 
      className="start-btn send-btn"
      type="submit" 
      tabIndex='0'
      aria-label='Next question'
    >
      next
    </button> 
  )
}

export default NextButton 
