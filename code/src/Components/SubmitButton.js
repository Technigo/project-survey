import React from 'react'

export const SubmitButton = (props) => {
  return (
    <button className="submit-button" onClick={()=> {
      props.onCounterIncrease()           
    }}
    >
      SUBMIT      
    </button>

  )
}