import React from 'react'

export const NextButton = (props) => {
  return (
    <button className="next-button" onClick={()=> {      
    props.onCounterIncrease()       
    }}
    >
      NEXT        
    </button>

  )
}