import React from 'react'

export const NextButton = (props) => {
  return (
    <button tabindex="0" className="next-button" onClick={()=> {      
    props.onCounterIncrease()       
    }}
    >
      NEXT        
    </button>

  )
}